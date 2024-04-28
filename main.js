const menu = document.getElementById('menu');
const modal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn')
const cratItemsContainer = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')
const checkoutBtn = document.getElementById('checkout-btn')
const cartCount = document.getElementById('cart-count')
const adressInput = document.getElementById('address')
const adressWarn = document.getElementById('address-warn')
const closeModalBtn = document.getElementById('close-modal-btn')

const cart = [];

cartBtn.addEventListener("click", function() {
    modal.style.display = "flex"
})

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})

menu.addEventListener('click', function (event) {
    let parentButton = event.target.closest('.add-cart-btn')

    if (parentButton) {
        const name = parentButton.getAttribute('data-name')
        const price = parseFloat(parentButton.getAttribute('data-price'))
        addToCart(name, price)
    }
})

function addToCart(name, price) {
    const existItem = cart.find(item => item.name === name)

    if (existItem) {
        existItem.quantity += 1;
        return;
    }

    cart.push({
        name,
        price,
        quantity: 1,
    })

    updateCartModal()
}

function updateCartModal() {
    cratItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const creatItemsElement = document.createElement("div");

    creatItemsElement.innerHTML = `
    <div>
        <div>
            <p>${item.name}</p>
            <p>${item.quantity}</p>
            <p>${item.price}</p>
        </div>
        
        <div>
            <button> Remover </button
        </div>
        </div>
    `
        cratItemsContainer.appendChild(creatItemsElement)
})



    }