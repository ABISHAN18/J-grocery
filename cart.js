// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout');

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${item.id} - Rs.${item.price.toFixed(2)} x ${item.quantity}</span>
            <span>Rs.${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase! Your order has been processed.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
});

document.addEventListener('DOMContentLoaded', updateCart);

// Listen for storage changes from other pages
window.addEventListener('storage', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();
});