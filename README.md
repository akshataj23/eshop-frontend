# eshop-frontend
# upGrad Eshop Application

This is a simple e-commerce frontend project created for the upGrad course.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-link>
    cd eshop-frontend
    ```

2. Open `index.html` in a browser to view the project.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Code Example

Here’s an example of the JavaScript used to render the product list:

```javascript
const products = [
    { id: 1, name: "Smartphone", price: 499 },
    { id: 2, name: "Laptop", price: 899 },
    { id: 3, name: "Headphones", price: 199 }
];

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

window.onload = renderProducts;
