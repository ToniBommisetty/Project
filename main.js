let search = document.querySelector('.search-box');
let cart = document.querySelector('.cart');
let user = document.querySelector('.wrapper');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Function to show the registration form
function showRegister() {
    document.getElementById("uregister").style.display = "block";
    document.getElementById("lgn-btn").style.display = "none";
}

// Function to show the login form
function showLogin() {
    document.getElementById("uregister").style.display = "none";
    document.getElementById("lgn-btn").style.display = "block";
}

// Login button click event
const loginButton = document.querySelector('.login-btn');
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const email = document.querySelector('.login-page input[type="email"]').value.trim();
    const password = document.querySelector('.login-page input[type="password"]').value.trim();

    // Validate inputs
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Sample user data (for demonstration purposes)
    const validUsers = [
        { email: "Tonibommisetty@gmail.com", password: "Ammalovesai@143" },
        { email: "Bommisettysainarasimha@gmail.com", password: "Ammalovesai" }
    ];

    // Check if the user exists
    const user = validUsers.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful! Redirecting...");
        // Redirect to the user dashboard page
        window.location.href = "user.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }

    // Clear the form fields
    document.querySelector('.login-page input[type="email"]').value = "";
    document.querySelector('.login-page input[type="password"]').value = "";
});



// Function to open the edit profile form
function openForm() {
    document.getElementById("myPopup").style.display = "block";
}

// Function to close the edit profile form
function closeForm() {
    document.getElementById("myPopup").style.display = "none";
}

// Add event listener to the close icon
document.addEventListener('DOMContentLoaded', function() {
    const closeIcon = document.querySelector('.edit-profile .close .bx-window-close');
    if (closeIcon) {
        closeIcon.addEventListener('click', closeForm);
    }
});





// Function to show the profile content
function showprofile() {
    document.getElementById("profile-content").style.display = "block";
    document.getElementById("orders-content").style.display = "none";
}

// Function to show the orders content
function showorder() {
    document.getElementById("orders-content").style.display = "block";
    document.getElementById("profile-content").style.display = "none";
}