// script.js
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Perform desired action with the form data
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
