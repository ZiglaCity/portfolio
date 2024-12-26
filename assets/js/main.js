// Typewriter Effect
const roles = [
    "Pythonist ",
    "Developer " ,
    "Fast Learner ",
    "Cyber Sentinel ",
    "Tech Enthusiast "
];

  
  let roleIndex = 0;
  let charIndex = 0;
  const typewriter = document.getElementById("typewriter");
  
  function typeText() {
    if (charIndex < roles[roleIndex].length) {
      typewriter.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 200);
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 100);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeText, 500);
    }
  }
  
  typeText();
  
  // Navbar Toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  