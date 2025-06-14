// loginHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    // Load users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Check credentials
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('Login successful! Welcome back, ' + username);
            window.location.href = 'index.html'; // Redirect to homepage
        } else {
            alert('Invalid username or password. Please try again or register.');
        }

        // Clear form
        form.reset();
    });
});