// cartCounter.js
document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Update count on page load
    updateCartCount();

    // Listen for storage changes from other pages
    window.addEventListener('storage', () => {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartCount();
    });
});