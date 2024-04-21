// Remove the element when it's right-clicked
document.addEventListener("DOMContentLoaded", function() {
    var exitButtonElement = document.querySelector('.exitbutton');

    exitButtonElement.addEventListener("click", function() {
        var elementToHide = document.querySelector('.forgotpassword');
        if (elementToHide) {
            elementToHide.style.display = "none"; // Hide the element when the exit button is clicked
        }
    });
});

// Form validation for forgot password form
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("forgotPasswordForm");
    var emailInput = document.getElementById("emailinput");
    var emailError = document.getElementById("Error");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        // Validate email input
        var email = emailInput.value.trim();

        if (email === "") {
            emailError.textContent = "Please enter an email address.";
            emailInput.classList.add("invalidinput");
            return false; // Don't submit the form
        } else if (!email.includes("@liceo.edu.ph")) {
            emailError.innerText = "Use your Liceo Email";
            emailInput.classList.add("invalidinput");
            return false; // Don't submit the form
        }
        // If email is valid, submit the form
        this.submit();
    });

    emailInput.addEventListener("input", function() {
        // Reset border color and error message when user starts typing
        this.style.borderColor = "";
        emailError.textContent = "";
        emailInput.classList.remove("invalidinput");
    });

});

// Function to clear error messages for email field
function clearErrors() {
    document.getElementById("Error").textContent = "";
    document.getElementById("emailinput").classList.remove("invalidinput");
}

// Add event listener to clear errors on click event for email field
document.getElementById("emailinput").addEventListener("click", clearErrors);
