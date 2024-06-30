import { getProductsByCategory, getAllProducts } from './products.js';

let cart = [];
let currentProducts = [];
let currentCategory = "Wszystko";

document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".categories-items button");
    categories.forEach(category => {
        category.addEventListener("click", (event) => {
            categories.forEach(btn => btn.classList.remove("active"));
            event.target.classList.add("active");

            const categoryName = event.target.textContent;
            currentCategory = categoryName;
            loadProducts(categoryName);
        });
    });

    loadProducts("Wszystko");

    const clearCartButton = document.querySelector(".basket-clear-btn");
    clearCartButton.addEventListener("click", clearCart);

    const searchBar = document.querySelector(".search-bar-input");
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        searchProducts(searchTerm);
    });
});

function loadProducts(category) {
    if (category === "Wszystko") {
        currentProducts = getAllProducts();
    } else {
        currentProducts = getProductsByCategory(category);
    }
    displayProducts(currentProducts);
}

function displayProducts(products) {
    const productsSection = document.querySelector(".products");
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product-item";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p class="product-name">${product.name}</p>
            <p class="product-description">${product.description}</p>
            <span class="product-price">${product.price} zł</span>
            <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Dodaj do koszyka</button>
        `;
        productsSection.appendChild(productElement);
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const name = event.target.getAttribute("data-name");
            const price = parseFloat(event.target.getAttribute("data-price"));
            addToCart(name, price);
        });
    });
}

function addToCart(name, price) {
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function updateCart() {
    const basketAmount = document.querySelector(".basket-amount");
    const basketTotal = document.querySelector(".basket-total");

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    basketAmount.textContent = `Koszyk (${totalQuantity})`;
    basketTotal.textContent = `Łączna cena: ${totalPrice.toFixed(2)} zł`;
}

function searchProducts(searchTerm) {
    if (searchTerm === "") {
        displayProducts(currentProducts);
        return;
    }

    const allProducts = getAllProducts();
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
}
