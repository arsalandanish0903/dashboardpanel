
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoview({
      behavior: 'smooth'
    })
  })
})

function validateForm() {
    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const enterEmail = document.getElementById("enterEmail").value;
    const enterPassword = document.getElementById("enterPassword").value;

    // Validation flags
    let isValid = true;

    // Validate email
    if (enterEmail === '') {
        document.getElementById('usernameError').textContent = 'Email is required';
        isValid = false;
    }

    // Validate password
    if (enterPassword === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    }

    // If the form is valid, proceed with form submission (e.g., send data to the server)
    if (isValid) {
        // Simulate a successful login
        if (enterEmail === 'arsalan@gmail.com' && enterPassword === 'password') {
            smoothRedirect('dashboardleft.html'); // Redirect to dashboard smoothly
        } else {
            document.getElementById('usernameError').textContent = 'Invalid email or password';
        }
    }

    // Prevent form submission
    return false;
}

function smoothRedirect(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Duration should match the CSS transition time
}