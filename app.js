const products = [
    { id: 1, name: "Chleb pszenny", price: 5.50 },
    { id: 2, name: "Masło ekstra", price: 7.20 },
    { id: 3, name: "Mleko 3.2%", price: 3.80 },
    { id: 4, name: "Jajka (10 szt.)", price: 9.00 }
];

function renderProducts() {
    const productList = document.getElementById('product-list');
    
    if (!productList) return;

    productList.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Cena: <strong>${product.price.toFixed(2)} PLN</strong></p>
            <button onclick="addToCart(${product.id})">Dodaj do koszyka</button>
        `;
        productList.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push(product);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`Dodano "${product.name}" do koszyka!`);
}

document.addEventListener('DOMContentLoaded', renderProducts);