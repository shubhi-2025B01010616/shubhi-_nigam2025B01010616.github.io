// Welcome Alert
window.onload = function () {
    alert("Welcome to Amazon!");
};

// Back to Top Functionality
const backToTop = document.querySelector(".back");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Sign In Button Functionality
const signInBtn = document.querySelector(".sign button");

signInBtn.addEventListener("click", function () {
    let email = prompt("Enter your Email Address:");

    if (email === null || email.trim() === "") {
        alert("Email cannot be empty!");
        return;
    }

    // Simple Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        alert("Successfully signed in with: " + email);
    } else {
        alert("Please enter a valid email address!");
    }
});