window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 50) { // Change 50 to the scroll position where you want the background to change
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
