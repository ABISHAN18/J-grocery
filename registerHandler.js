// registerHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');

    // Load users from localStorage or initialize empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Check if username already exists
        if (users.some(u => u.username === username)) {
            alert('Username already exists. Please choose a different one.');
        } else {
            const newUser = { username, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            alert('Registration successful! Welcome, ' + username);
            window.location.href = 'index.html'; // Redirect to homepage
        }

        // Clear form
        form.reset();
    });
});