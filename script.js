// Use localStorage to persist cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const products = document.querySelectorAll('.product');

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.dataset.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.dataset.id,
            price: parseFloat(product.dataset.price),
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.dataset.id} added to cart!`);
    // Redirect to cart page
    window.location.href = 'cart.html';
}

products.forEach(product => {
    product.querySelector('.add-to-cart').addEventListener('click', (e) => {
        e.preventDefault();
        addToCart(product);
    });
});