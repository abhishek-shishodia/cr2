document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for contacting us!');
    this.reset();
  });
  