function displayRandomGreeting() {
    var greetings = [

      "Hello! Firstname"
    ];
  
    var randomIndex = Math.floor(Math.random() * greetings.length);
    var randomGreeting = greetings[randomIndex];
  
    var welcomeMessageDiv = document.getElementById("welcomeMessage");
    welcomeMessageDiv.innerHTML = "<h2>" + randomGreeting + "</h2>";
  }
  
  // Call the function to display a random greeting message
  displayRandomGreeting();