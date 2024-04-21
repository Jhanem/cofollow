function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phone = document.getElementById("phone").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var phoneError = document.getElementById("phoneError");
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
    if (password.trim() === "") { // Check if password is blank or contains only whitespace
        passwordError.innerText = "Password is required";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerText = "Password is Weak";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    } else {
        passwordError.innerText = "";
        document.getElementById("password").classList.remove("invalid");
    }

    // Validate confirmPassword
    if (confirmPassword !== password) {
        confirmPasswordError.innerText = "Passwords do not match";
        document.getElementById("confirmPassword").classList.add("invalid");
        isValid = false;
    } else {
        confirmPasswordError.innerText = "";
        document.getElementById("confirmPassword").classList.remove("invalid");
    }

    // Validate phone number length
    if (phone.length < 11) {
        phoneError.innerText = "Phone number must be 11 characters long";
        document.getElementById("phone").classList.add("invalid");
        isValid = false;
    } else {
        phoneError.innerText = "";
        document.getElementById("phone").classList.remove("invalid");
    }

    // Display the register button regardless of validation status
    registerButton.disabled = false;

    // Return false to prevent form submission if any field is invalid
    return isValid;
}

// Function to clear error messages for all fields and remove "invalid" class
function clearErrors() {
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var phoneError = document.getElementById("phoneError");

    // Clear error messages for all fields
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
    phoneError.innerText = "";

    // Remove "invalid" class and reset styles for all fields
    document.getElementById("email").classList.remove("invalid");
    document.getElementById("password").classList.remove("invalid");
    document.getElementById("confirmPassword").classList.remove("invalid");
    document.getElementById("phone").classList.remove("invalid");
}

// Add event listeners to clear errors and remove "invalid" class on click events for all fields
document.getElementById("email").addEventListener("click", clearErrors);
document.getElementById("password").addEventListener("click", clearErrors);
document.getElementById("confirmPassword").addEventListener("click", clearErrors);
document.getElementById("phone").addEventListener("click", clearErrors);
