// Variables to store cart data
let cartItems = [];
let cartTotal = 0;

// Function to toggle the cart modal visibility
function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Function to close the cart modal
function closeModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "none";
}

// Function to add an item to the cart
function addToCart(button) {
    // Get product details from the button's parent element
    const product = button.closest(".product");
    const name = product.querySelector("h2").innerText;
    const price = parseFloat(product.getAttribute("data-price"));

    // Add item to the cart
    cartItems.push({ name, price });
    cartTotal += price;

    // Update cart display
    updateCartDisplay();
}

// Function to update the cart display in the modal
function updateCartDisplay() {
    const cartList = document.getElementById("cart-items-list");
    const cartTotalDisplay = document.getElementById("cart-total");

    // Clear the current cart display
    cartList.innerHTML = "";

    // Populate the cart list with items
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update the total
    cartTotalDisplay.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

// Function to handle checkout
function checkout() {
    alert("Checkout functionality coming soon!");
    closeModal();
}
