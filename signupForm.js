// Switch between Login and Signup Forms
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Show Signup Form
switchToSignup.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  signupContainer.style.display = 'block';
});

// Show Login Form
switchToLogin.addEventListener('click', () => {
  signupContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});
