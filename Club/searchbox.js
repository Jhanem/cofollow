const clubs = [
  { id: 'element1', name: 'Galere Club', image: '/Clubs/Images/galere.jpg', link: 'https://sportscenter.com', accountName: 'sportscenter' },
  { id: 'element2', name: 'Liceo U High School Glee Club', image: '/Clubs/Images/geeclub.jpg', link: 'https://gleeclub.com', accountName: 'gleeclub' },
  { id: 'element3', name: 'Liceo U SHS Motion Ensemble', image: '/Clubs/Images/motion.jpg', link: 'https://motionensemble.com', accountName: 'motionensemble' },
  { id: 'element4', name: 'Liceo U SHS Hiraya Music Club', image: '/Clubs/Images/hiraya.jpg', link: 'https://hirayamusicclub.com', accountName: 'hirayamusicclub' },
  { id: 'element5', name: 'BTS Buhay Teatro at Sining', image: '/Clubs/Images/teatro.jpg', link: 'https://btsbuhayteatroatsining.com', accountName: 'btsbuhayteatroatsining' },
  { id: 'element6', name: 'Folkloric Dance Troupe-SHS', image: '/Clubs/Images/troupe.jpg', link: 'https://folkloricdancetroupe.com', accountName: 'folkloricdancetroupe' },
  { id: 'element7', name: 'Liceo U SHS-Marching Band', image: '/Clubs/Images/marching.jpg', link: 'https://liceoushsmb.com', accountName: 'liceoushsmb' },
  { id: 'element8', name: 'The Siyensiya Club', image: '/Clubs/Images/siyensya.jpg', link: 'https://siyensiya.com', accountName: 'siyensiya' },
  { id: 'element9', name: 'Math Enthusiasts Society Club', image: '/Clubs/Images/maes.jpg', link: 'https://maesclub.com', accountName: 'maesclub' },
  { id: 'element10', name: 'Debate Circle - SHS Main', image: '/Clubs/Images/circle.jpg', link: 'https://debatecircle.com', accountName: 'debatecircle' },
  { id: 'element11', name: 'Liceo U SHS - Music Enthusiasts', image: '/Clubs/Images/enthusiast.jpg', link: 'https://musicenthusiasts.com', accountName: 'musicenthusiasts' },
  { id: 'element12', name: 'Lic-ECO', image: '/Clubs/Images/liceco.jpg', link: 'https://liceco.com', accountName: 'liceco' },
  { id: 'element13', name: 'LDCU SHS Sports Club', image: '/Clubs/Images/sportsclub.jpg', link: 'https://sportscenter.com', accountName: 'sportscenter' }
];

const searchInput = document.getElementById('searchBox');
const clubsContainer = document.getElementById('clubsContainer');
const clubClicked = document.querySelector('.clubclicked');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  clubs.forEach(club => {
    const clubElement = document.getElementById(club.id);

    if (club.name.toLowerCase().includes(searchTerm)) {
      clubElement.style.display = 'block';
    } else {
      clubElement.style.display = 'none';
    }
  });
});


clubs.forEach(club => {
  const clubElement = document.getElementById(club.id);

  clubElement.addEventListener('click', () => {
    clubClickedHandler(club);
  });
});

const exitButton = document.getElementById('exit');

exitButton.addEventListener('click', () => {
  clubClicked.style.display = 'none';
});


  // Get the container where the club links will be displayed
  const clubLinksContainer = document.getElementById('clubLinks');

  // Loop through the clubs array and create links for each club
  clubs.forEach(club => {
    // Create a new <a> element
    const link = document.createElement('a');
    // Set the href attribute to the club's link
    link.setAttribute('href', club.link);
    // Set the target attribute to open in a new tab
    link.setAttribute('target', '_blank');
    // Set the text content of the link to the club's account name
    link.textContent = club.accountName;
    // Append the link to the clubLinksContainer
    clubLinksContainer.appendChild(link);
    // Add a line break after each link for better readability
    clubLinksContainer.appendChild(document.createElement('br')
  );
});

