// Example product data
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 499,
        image: "assets/smartphone.jpg"
    },
    {
        id: 2,
        name: "Laptop",
        price: 899,
        image: "assets/laptop.jpg"
    },
    {
        id: 3,
        name: "Headphones",
        price: 199,
        image: "assets/headphones.jpg"
    }
];

// Function to render product list
function renderProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Call the render function on page load
window.onload = renderProducts;
