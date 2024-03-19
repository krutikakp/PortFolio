function scrollToNextPage() {
  const homeSection = document.querySelector(".home");
  homeSection.scrollIntoView({ behavior: "smooth" });
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Convert formData to JSON object
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    // Example: Log form data to console (you may send it to a server instead)
    console.log(jsonObject);

    // Reset form after submission
    this.reset();
  });

document
  .getElementById("contactLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Redirect the user to contact.html
    window.location.href = "contact.html";
  });
// Function to save scroll position to localStorage
function saveScrollPosition() {
  localStorage.setItem('scrollPosition', window.scrollY);
}

// Function to restore scroll position from localStorage
function restoreScrollPosition() {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
  }
}

// Event listener to save scroll position when the page is scrolled
window.addEventListener('scroll', saveScrollPosition);

// Event listener to restore scroll position when the page is loaded
window.addEventListener('load', restoreScrollPosition);
function redirectToLink(url) {
  // Open the provided link in a new tab
  window.open(url, "_blank");
}

