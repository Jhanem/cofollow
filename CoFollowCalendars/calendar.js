const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.addEventListener("DOMContentLoaded", function () {
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const currentMonth = document.getElementById("currentMonth");
    const weekdaysList = document.querySelector(".weekdays");
    const daysList = document.querySelector(".days");
    const rightContainer = document.querySelector(".right-container");

    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonthIndex = today.getMonth();
    let date = today.getDate();

    function renderCalendar(year, monthIndex) {
        daysList.innerHTML = "";
        currentMonth.textContent = months[monthIndex] + " " + year;

        // Clear existing weekdays
        weekdaysList.innerHTML = "";

        // Create and append weekdays
        for (let i = 0; i < weekdays.length; i++) {
            const weekdayElement = document.createElement("li");
            weekdayElement.textContent = weekdays[i];
            weekdaysList.appendChild(weekdayElement);
        }
        

        document.getElementById("day").value = date;
        document.getElementById("year").value = year;
        document.getElementById("year1").value = year;
    
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const totalDays = new Date(year, monthIndex + 1, 0).getDate();
    
        // Calculate the number of days in the previous month
        const prevMonthTotalDays = new Date(year, monthIndex, 0).getDate();
    
        // Add the days of the previous month
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayElement = document.createElement("li");
            dayElement.textContent = prevMonthTotalDays - i;
            dayElement.classList.add("prev-month"); // Add a class to style these days differently
            daysList.appendChild(dayElement);
        }
    
        // Add the days of the current month
        for (let i = 1; i <= totalDays; i++) {
            const dayElement = document.createElement("li");
            dayElement.textContent = i;
            daysList.appendChild(dayElement);
        }
    
        // Add the days of the next month
        let nextMonthDay = 1;
        while (daysList.children.length < 42) { // Fill up to 42 slots (6 weeks)
            const dayElement = document.createElement("li");
            dayElement.textContent = nextMonthDay++;
            dayElement.classList.add("next-month"); // Add a class to style these days differently
            daysList.appendChild(dayElement);
        }

        // Highlight the current day after rendering the calendar
        highlightCurrentDay(year, monthIndex);
    }

    function highlightCurrentDay(year, monthIndex) {
        // Get today's date
        const today = new Date();
        
        // Only highlight the current day if the year and month match today's year and month
        if (today.getFullYear() === year && today.getMonth() === monthIndex) {
            // Get all the days in the calendar
            let days = document.querySelectorAll('.days li');
            
            // Get the current date
            let date = today.getDate();
            
            // Loop through each day
            for (let i = 0; i < days.length; i++) {
                // Get the day number from the text content of the li element
                let dayNumber = parseInt(days[i].textContent, 10);
            
                // If the day number matches today's date and the day does not belong to the previous or next month,
                // add the 'current-day' class
                if (dayNumber === date && !days[i].classList.contains('prev-month') && !days[i].classList.contains('next-month')) {
                    days[i].classList.add('current-day');
                    days[i].setAttribute('id', 'current-day');
                    break;
                }
                
            }
        }
    }

    renderCalendar(currentYear, currentMonthIndex); // Initial render

    function goToPreviousMonth() {
        if (currentMonthIndex === 0) { // If current month is January
            currentMonthIndex = 11; // Set month to December
            currentYear--; // Decrease year by 1
        } else {
            currentMonthIndex--; // Decrease month by 1
        }
        renderCalendar(currentYear, currentMonthIndex);
    }
    
    function goToNextMonth() {
        if (currentMonthIndex === 11) { // If current month is December
            currentMonthIndex = 0; // Set month to January
            currentYear++; // Increase year by 1
        } else {
            currentMonthIndex++; // Increase month by 1
        }
        renderCalendar(currentYear, currentMonthIndex);
    }
    
    prevMonthBtn.addEventListener("click", goToPreviousMonth);
    
    nextMonthBtn.addEventListener("click", goToNextMonth);
    
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            goToPreviousMonth();
        } else if (event.key === "ArrowRight") {
            goToNextMonth();
        }
    });
    
});



