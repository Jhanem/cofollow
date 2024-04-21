document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.getElementById("settings-btn");
    const dropdownContent = document.getElementById("dropdown-content");

    settingsBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        dropdownContent.classList.toggle("show");

        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.add("reposition-text");
        } else {
            dropdownContent.classList.remove("reposition-text");
        }
    });

    window.addEventListener("click", function () {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
            dropdownContent.classList.remove("reposition-text");
        }
    });
    
});