document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login form");
  const signupForm = document.querySelector(".signup form");

  // Function to validate login form
  function validateLoginForm() {
    const loginEmail = document
      .querySelector("#loginEmail")
      .value.toLowerCase(); // Convert email to lowercase
    const loginPassword = document.querySelector("#loginPassword").value;

    // Regular expressions for validation
    const emailRegex = /^[a-z0-9]+@[a-z]+\.(com|org|net|io|in)$/; // Modified regex for lowercase email
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,}$/; // Add the password regex here

    // Check if username and password are in the correct format
    if (loginEmail.trim() === "") {
      alert("Please enter a valid email address.");
      document.querySelector("#loginEmail").focus();
      return false;
    } else if (!emailRegex.test(loginEmail)) {
      alert("Please enter a valid email address.");
      document.querySelector("#loginEmail").focus();
      return false;
    } else if (loginPassword.trim() === "") {
      alert("Please enter your password.");
      document.querySelector("#loginPassword").focus();
      return false;
    } else if (!passwordRegex.test(loginPassword)) {
      alert(
        "Password must have at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      document.querySelector("#loginPassword").focus();
      return false;
    }
    return true;
  }

  // Function to toggle the login button
  function toggleLoginButton() {
    const isEmailEmpty = loginEmailInput.value.trim() === "";
    const isPasswordEmpty = loginPasswordInput.value.trim() === "";
    loginButton.disabled = isEmailEmpty || isPasswordEmpty;
  }

  // Function to validate signup form
  function validateSignupForm() {
    const signupEmail = document
      .querySelector("#signupEmail")
      .value.toLowerCase(); // Convert email to lowercase
    const signupPassword = document.querySelector("#signupPassword").value;
    const signupName = document.querySelector("#signupName").value;
    const signupAddress = document.querySelector("#signupAddress").value;
    const signupPolicy = document.querySelector("#policy").checked;

    // Regular expressions for validation
    const nameRegex = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/;
    const addressRegex = /^[A-Za-z0-9'\.\-\s\,]$/;
    const emailRegex = /^[a-z0-9]+@[a-z]+\.(com|org|net|io|in)$/; // Modified regex for lowercase email
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,}$/; // Add the password regex here

    // Check if username, password, and policy agreement are in the correct format

    if (signupName.trim() === "") {
      alert("Please enter your name");
      document.querySelector("#signupName").focus();
      return false;
    } else if (!nameRegex.test(signupName)) {
      alert("Please enter a valid name");
      document.querySelector("#signupName").focus();
      return false;
    } else if (signupEmail.trim() === "") {
      alert("Please enter a email address");
      document.querySelector("#signupEmail").focus();
      return false;
    } else if (!emailRegex.test(signupEmail)) {
      alert("Please enter a valid email address");
      document.querySelector("#signupEmail").focus();
      return false;
    } else if (signupPassword.trim() === "") {
      alert("Please enter your password.");
      document.querySelector("#signupPassword").focus();
      return false;
    } else if (!passwordRegex.test(signupPassword)) {
      alert(
        "Password must have at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      document.querySelector("#signupPassword").focus();
      return false;
    }
    if (signupAddress.trim() === "") {
      alert("Please enter your address");
      document.querySelector("#signupAddress").focus();
      return false;
    }
    //  else if (!addressRegex.test(signupAddress)) {
    //   alert("Please enter a valid address");
    //   document.querySelector("#signupAddress").focus();
    //   return false;
    //  }
    else if (!signupPolicy) {
      alert("Please agree to the terms and conditions.");
      return false;
    }
    return true;
  }
  // Enable signup button on checkbox click
  const policyCheckbox = document.querySelector("#policy");
  const signupButton = document.querySelector(".signup-btn");

  policyCheckbox.addEventListener("change", function () {
    if (this.checked) {
      signupButton.disabled = false;
    } else {
      signupButton.disabled = true;
    }
  });

  // Add event listener to the forms
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      if (!validateLoginForm()) {
        // Focus on the input field with incorrect details
        if (loginEmailInput.value.trim() === "") {
          // alert("Please enter a valid email address.");
          loginEmailInput.focus();
        } else if (
          !/^[a-z0-9]+@[a-z]+\.(com|org|net|io|in)$/.test(
            loginEmailInput.value.toLowerCase()
          )
        ) {
          // alert("Please enter a valid email address.");
          loginEmailInput.focus();
        } else if (loginPasswordInput.value.trim() === "") {
          // alert("Please enter your password.");
          loginPasswordInput.focus();
        } else {
          // alert(
          //   "Password must have at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character."
          // );
          loginPasswordInput.focus();
        }
      } else {
        // Close the popup
        document.body.classList.remove("show-popup");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      if (!validateSignupForm()) {
        // Focus on the input field with incorrect details
        const signupEmail = document.querySelector("#signupEmail");
        const signupPassword = document.querySelector("#signupPassword");
        const signupMobile = document.querySelector(".signup-mobile");
        if (signupName.value.trim() === "") {
          signupName.focus();
        } else if (
          !/([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)^$/.text(signupName.value)
        ) {
          signupName.focus();
        } else if (signupEmail.value.trim() === "") {
          signupEmail.focus();
        } else if (
          !/^[a-z0-9]+@[a-z]+\.(com|org|net|io|in)$/.test(
            signupEmail.value.toLowerCase()
          )
        ) {
          signupEmail.focus();
        } else if (signupPassword.value.trim() === "") {
          signupPassword.focus();
        } else if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,}$/.test(
            signupPassword.value
          )
        ) {
          signupPassword.focus();
        } else if (signupAddress.value.trim() === "") {
          signupAddress.focus();
        } else if (!/^[A-Za-z0-9'\.\-\s\,]$/.test(signupAddress.value)) {
          signupAddress.focus();
        } else {
          document.querySelector("#policy").focus();
        }
      } else {
        document.body.classList.remove("show-popup");
      }
    });
  }
});

// Function to handle continuous alerts
function handleAlerts() {
  let lastFocus;

  window.onblur = function () {
    lastFocus = document.activeElement;
  };

  window.onfocus = function () {
    if (lastFocus) lastFocus.focus();
  };
}

handleAlerts();

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 0) {
      $("#scroll-top").show();
    } else {
      $("#scroll-top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
  loggedIN = true;
});

// Hide login popup
hidePopupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("show-popup");
});

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});

// Enable signup button on checkbox click
const policyCheckbox = document.querySelector("#policy");
const signupButton = document.querySelector(".signup-btn");

policyCheckbox.addEventListener("change", function () {
  signupButton.disabled = !this.checked;
});

// Enable login button only if the fields are not empty
const loginEmailInput = document.querySelector("#loginEmail");
const loginPasswordInput = document.querySelector("#loginPassword");
const loginButton = document.querySelector(".login-btn");

loginEmailInput.addEventListener("input", toggleLoginButton);
loginPasswordInput.addEventListener("input", toggleLoginButton);

function toggleLoginButton() {
  const isEmailEmpty = loginEmailInput.value.trim() === "";
  const isPasswordEmpty = loginPasswordInput.value.trim() === "";
  loginButton.disabled = isEmailEmpty || isPasswordEmpty;
}

// For discover more button of home
function toggleText() {
  const additionalText = document.getElementById("additionalText");
  const discoverMoreBtn = document.getElementById("discoverMoreBtn");
  const mainText = document.getElementById("mainText");
  const showLessBtn = document.getElementById("showLessBtn");

  if (additionalText.style.display === "none") {
    additionalText.style.display = "block";
    discoverMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline";
    mainText.style.display = "block";
  } else {
    additionalText.style.display = "none";
    discoverMoreBtn.style.display = "inline";
    showLessBtn.style.display = "none";
    mainText.style.display = "block";
  }
}
