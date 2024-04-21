var nameSelect = document.getElementById('nameSelect');

nameSelect.addEventListener('change', function() {
  if (nameSelect.value === 'name1') {
    showSlide_1();
  } else {
    hideSlide_1();
  }
});

function showSlide_1() {
  var slide_1 = document.querySelector('.slide_1');
  slide_1.style.display = 'block';

  var slide_2 = document.querySelector('.slide_2');
  slide_2.style.display = 'none';
}

function hideSlide_1() {
  var slide_1 = document.querySelector('.slide_1');
  slide_1.style.display = 'none';

  var slide_2 = document.querySelector('.slide_2');
  slide_2.style.display = 'block';
}


// Function to generate a random hex color code
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Generate a random background color
const randomColor = getRandomColor();

// Get all elements with the class "element"
const elements = document.querySelectorAll('#testelement');

// Loop through each element with the class "element" and apply the random background color
elements.forEach(function(element) {
  element.style.backgroundColor = randomColor;
});

// Get all elements with the id "calendar1"
const elements3 = document.querySelectorAll('#calendar1');

// Loop through each element with the id "calendar1" and apply the random background color
elements3.forEach(function(element) {
  element.style.backgroundColor = randomColor;
});

let today = new Date();
let currentMonthIndex = today.getMonth();
let currentMonth = months[currentMonthIndex];

document.getElementById("currentmonth").textContent = "Month of " + currentMonth;
document.getElementById("currentmonth1").textContent = "Month of " + currentMonth;