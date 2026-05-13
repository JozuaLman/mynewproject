window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const vh = window.innerHeight; // The height of your screen

  // Logic: Change "Active" scene based on how many "screens" you've scrolled
  const scenes = document.querySelectorAll('.scene');
  
  // Reset all scenes
  scenes.forEach(s => s.classList.remove('active'));

  if (scrollPos < vh) {
    scenes[0].classList.add('active'); // Intro
  } else if (scrollPos < vh * 2) {
    scenes[1].classList.add('active'); // Roles
  } else if (scrollPos < vh * 3) {
    scenes[2].classList.add('active'); // Projects
  } else {
    scenes[3].classList.add('active'); // Skills
  }
});