const modal = document.getElementById('cart-modal');

function mostrarElemento() {
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}
