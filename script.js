// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle experience details
document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const details = document.getElementById(targetId);
    details.classList.toggle('hidden');
    this.textContent = details.classList.contains('hidden') ? 'Show More' : 'Show Less';
  });
});