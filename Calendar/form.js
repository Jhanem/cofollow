const form = document.getElementById("event_admin");

// Assuming "slide_2" is the correct class name, change it if needed
const slide2Content = document.querySelector(".slide_2");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;
    const title = document.getElementById("set_title").value;

    if (!month || !day || !year || !title) {
        alert("Please fill in all the fields.");
        return;
    }

    const newItem = document.createElement('div');
    newItem.classList.add('element');
    newItem.innerHTML = `
        <div class="titlename">
            <h3>${title}</h3>
        </div>
        <div id="datedata">
            <h4>${month}/${day}/${year}</h4>
        </div>
    `;

    slide2Content.appendChild(newItem);

    form.reset();
});

const formUser = document.querySelector("#form_user");

// Assuming "slide_1" is the correct class name, change it if needed
const slide1Content = document.querySelector(".slide_1");

formUser.addEventListener("submit", function(event) {
    event.preventDefault();

    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;
    const title = document.getElementById("set_title").value;

    if (!month || !day || !year || !title) {
        alert("Please fill in all the fields.");
        return;
    }

    const newItem = document.createElement('div');
    newItem.classList.add('element');
    newItem.innerHTML = `
        <h1>Edit Event</h1>
        <label for="photoInput"><h5>Select a photo:</label>
        <input type="file" id="photoInput" accept="image/*">
        <div class="date">
            <label><h5>Event Date:</label>
            <input type="number" autocomplete="off" name="month" value="${month}" readonly>
            <input type="number" name="day" value="${day}" readonly>
            <input type="number" name="year" value="${year}" readonly>
        </div>
        <label for="set_title"><h5>Event Name:</label>
        <input name="set_title" value="${title}" readonly>
    `;

    slide1Content.appendChild(newItem);

    formUser.reset();
});


