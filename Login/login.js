function validateForm() {
    var email = document.getElementById("email").value.trim(); // Trimmed email
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var registerButton = document.getElementById("registerButton");

    var isValid = true;

    // Validate email
    if (email === "") {
        emailError.innerText = "Enter your Liceo Email";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    } else if (!email.includes("@liceo.edu.ph")) {
        emailError.innerText = "Use your Liceo Email";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    } else {
        emailError.innerText = "";
        document.getElementById("email").classList.remove("invalid");
    }

    // Validate password
    if (password === "") {
        passwordError.innerText = "Enter your password";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    } else {
        passwordError.innerText = "";
        document.getElementById("password").classList.remove("invalid");
    }

    // Enable/disable the register button based on validation status
    submit.disabled = false;

    // Return false to prevent form submission if any field is invalid
    return isValid;
}

// Function to clear error messages for email and password fields
function clearErrors() {
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("email").classList.remove("invalid");
    document.getElementById("password").classList.remove("invalid");
}

// Add event listeners to clear errors on click events for email and password fields
document.getElementById("email").addEventListener("click", clearErrors);
document.getElementById("password").addEventListener("click", clearErrors);

