// index.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const products = document.querySelectorAll('.product');

function addToCart(product) {
    const productId = product.dataset.id;
    const productPrice = parseFloat(product.dataset.price);

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            price: productPrice,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show popup message
    alert(`${productId} has been added to your cart!`);

    // Optional: Redirect to cart page (uncomment if desired)
    // window.location.href = 'cart.html';
}

products.forEach(product => {
    const addButton = product.querySelector('.add-to-cart');
    if (addButton) {
        addButton.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(product);
        });
    } else {
        console.error('Add to Cart button not found in product:', product);
    }
});

// Update cart count in navigation (if present)
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);