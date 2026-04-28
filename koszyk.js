import { getCart, saveCart } from './storage.js';

const cartContainer = document.getElementById('cart');
const totalEl = document.getElementById('total');

function renderCart() {
  const cart = getCart();
  cartContainer.innerHTML = '';

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Koszyk jest pusty</p>';
    totalEl.textContent = '0 zł';
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * (item.quantity || 1);

    const el = document.createElement('div');
    el.classList.add('cart-item');

    el.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price} zł</span>
      <button data-index="${index}">Usuń</button>
    `;

    el.querySelector('button').addEventListener('click', () => {
      removeItem(index);
    });

    cartContainer.appendChild(el);
  });

  totalEl.textContent = total.toFixed(2) + ' zł';
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

renderCart();