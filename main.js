const menu = document.getElementById('menu');
const modal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn')
const cratItemsContainer = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')
const checkoutBtn = document.getElementById('checkout-btn')
const cartCount = document.getElementById('cart-count')
const adressInput = document.getElementById('address')
const adressWarn = document.getElementById('address-warn')



cartBtn.addEventListener("click", function() {
    modal.style.display = "flex"
})

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})