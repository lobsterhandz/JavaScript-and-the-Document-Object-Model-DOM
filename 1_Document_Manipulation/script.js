// Task 1: Array containing product information
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
  ];
  
  // Task 2: Function to dynamically display products on the webpage
  function displayProducts() {
    const productContainer = document.getElementById("productContainer");
  
    // Clear existing content
    productContainer.innerHTML = "";
  
    // Iterate through the products array and create elements for each product
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productName = document.createElement("h2");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.innerHTML = `Price: <span>$${product.price.toFixed(2)}</span>`;
  
      const productDescription = document.createElement("p");
      productDescription.textContent = `Description: ${product.description}`;
  
      // Append elements to the product div
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productDescription);
  
      // Append the product div to the container
      productContainer.appendChild(productDiv);
    });
  }
  
  // Task 3: Event listener to display products when the page loads
  document.addEventListener("DOMContentLoaded", displayProducts);
  