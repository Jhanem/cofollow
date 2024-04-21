document.addEventListener("DOMContentLoaded", function() {
    var termsLink = document.querySelector('.terms');
    var loadingScreen = document.getElementById('loading-screen');
    var forgotPasswordForm = document.querySelector('.forgotpassword');

    // Initially hide the loading screen and forgot password form
    loadingScreen.style.display = 'none';
    forgotPasswordForm.style.display = 'none';

    // Show the loading screen when terms are clicked
    termsLink.addEventListener('click', function() {
        loadingScreen.style.display = 'flex'; // Show loading screen
        
        // Hide the loading screen after a delay of 2 seconds
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 1000);
    });

    // Set a timer to display the forgot password form after a delay when terms are clicked
    termsLink.addEventListener('click', function() {
        setTimeout(function() {
            forgotPasswordForm.style.display = 'block';
            
        }, 1300); // Adjust the delay as needed (5000 milliseconds in this example)
    });
});
