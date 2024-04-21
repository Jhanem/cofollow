var exitImg = document.getElementById('exit');
var addeventclickDiv = document.getElementById('addeventclick');

exitImg.addEventListener('click', function() {
  addeventclickDiv.style.display = 'none';
});

var triggerElement = document.getElementById('addevent');
var addeventclickDiv = document.getElementById('addeventclick');

triggerElement.addEventListener('click', function() {
  addeventclickDiv.style.display = 'block';
});

document.getElementById('addeventclick').classList.toggle('active');

var todoListElement = document.getElementById("ToDolist");
const addEventClickElement = document.getElementById("addeventclick1");

var exitButton = document.getElementById('exit1');

exitButton.addEventListener('click', function() {
  toggleAddEventVisibility();
});

var todoListElement = document.getElementById('ToDolist');

todoListElement.addEventListener('click', function() {
  toggleAddEventVisibility();
});

function toggleAddEventVisibility() {
  var addEventClickElement = document.getElementById('addeventclick1');
  if (addEventClickElement.style.display === "none") {
    addEventClickElement.style.display = "block";
  } else {
    addEventClickElement.style.display = "none";
  }
  document.getElementById('addeventclick1').classList.toggle('active');
}


function limitDigits(element, maxLength) {
  if (element.value.length > maxLength) {
      element.value = element.value.slice(0, maxLength);
  }
}


function validateInput(element, minVal, maxVal) {
  const currentValue = parseInt(element.value);
  if (currentValue < minVal) {
      element.value = minVal;
  } else if (currentValue > maxVal) {
      element.value = maxVal;
  }
}

// Check if the user is an admin
const isAdmin = true; // Replace this with a real condition or variable

// Display the admin element if the user is an admin
if (isAdmin) {
  document.getElementById('addevent').style.display = 'block';
}

const textarea = document.getElementById('setdesc');
const charCountElement = document.getElementById('char-count');

// Update the character count display
function updateCharCount() {
  const text = textarea.value;
  const charCount = text.length;
  const remainingChars = 250 - charCount;
  charCountElement.textContent = `${charCount}/250 characters`; // Update limit to 250
  if (remainingChars < 0) {
    charCountElement.style.color = 'red';
  } else {
    charCountElement.style.color = '';
  }
}






// Elements to trigger scroll locking and unlocking
const lockScrollElement = document.querySelector(".addevent");
const unlockScrollElement = document.getElementById("exit");

// Function to lock scrolling
function lockScroll() {
  document.body.classList.add("scroll-locked");
}

// Function to unlock scrolling
function unlockScroll() {
  document.body.classList.remove("scroll-locked");
}

// Event listeners for click events
lockScrollElement.addEventListener("click", lockScroll);
unlockScrollElement.addEventListener("click", unlockScroll);


addEventClickElement.style.display = "none";

