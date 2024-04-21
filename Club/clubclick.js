// Get all the club elements
const clubs = document.querySelectorAll('.centered');
const clubClicked = document.querySelector('.clubclicked');
const clubLogo = document.querySelector('.club_info img');
const searchInput = document.getElementById('searchBox');
const clubLink = document.querySelector('.club_content a');

// Add a click event listener to each club element
clubs.forEach(club => {
  club.addEventListener('click', () => {
    // Get the club name and image URL from the clicked element
    const clubName = club.querySelector('h2').textContent;
    const clubImage = club.style.backgroundImage.slice(5, -2);

    // Show the clubclicked element
    clubClicked.style.display = 'block';

    // Set the club name and cover image in the clubclicked element
    document.querySelector('.club_content h2').textContent = clubName;
    clubLogo.src = clubImage;
  });
});

// Add an input event listener to the search input element
searchInput.addEventListener('input', () => {
  // Get the search input value
  const searchValue = searchInput.value.toLowerCase();

  // Loop through each club element
  clubs.forEach(club => {
    // Get the club name
    const clubName = club.querySelector('h2').textContent.toLowerCase();

    // Check if the club name contains the search value
    if (clubName.includes(searchValue)) {
      // Show the club element
      club.style.display = 'block';
    } else {
      // Hide the club element
      club.style.display = 'none';
    }
  });
});

// Get the exit button
const exitButton = document.getElementById('exit');

// Add a click event listener to the exit button
exitButton.addEventListener('click', () => {
  // Hide the clubclicked element
  clubClicked.style.display = 'none';
});

