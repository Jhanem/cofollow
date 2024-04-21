// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Call scrollToTop function when the website starts
scrollToTop();

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var moreInfoElement = document.querySelector(".moreinfo");
        moreInfoElement.classList.add("show");
    }, 3200); // 3 seconds delay
});


document.addEventListener("DOMContentLoaded", function() {
    var moreInfoElement = document.querySelector(".moreinfo");
    moreInfoElement.addEventListener("click", function() {
        var aboutSection = document.querySelector(".about");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.querySelector(".back");
    backButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Initially prevent scrolling
document.body.style.overflowY = 'hidden';

// Enable scrolling after 3 seconds
setTimeout(function() {
    document.body.style.overflowY = 'scroll';
}, 100); // 3000 milliseconds (or 3 seconds)


// Wait for the window to load
window.addEventListener('load', function() {
    // Hide the loading screen after a delay (e.g., 2 seconds)
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 100); // 2000 milliseconds (or 2 seconds)
});

