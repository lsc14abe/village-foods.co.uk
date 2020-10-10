// Element

// Get all links
const links = document.querySelectorAll('a');

// Event

// Add an event listener of click
links.forEach(function(element){
   element.addEventListener('click', navigateToSection)
});

// Execution

// prevent the link to navigate to section
// Then smooth scroll to that element
function navigateToSection(event) {
  event.preventDefault();
  const element = event.target;
  const sectionToGo  = document.querySelector(element.getAttribute('href'));
  sectionToGo.scrollIntoView({
    behavior: "smooth",
  });
}

