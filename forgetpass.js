document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button[type="submit"]');
    const userNameInput = document.querySelector('#Uname');
  
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      const userName = userNameInput.value.toLowerCase();
      const emailRegex = /^[a-z0-9]+@[a-z]+\.(com|org|net|io|in)$/; // Email regex for lowercase email
  
      if (!emailRegex.test(userName)) {
        alert('Please enter a valid email address with all lowercase letters.');
      } else {
        alert('Reset link has been sent to your email id.');
      }
    });
  });