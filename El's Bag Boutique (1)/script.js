/*Buy Now Button*/
function toggleBuyNow(id) {
    var container = document.getElementById('buyNowContainer' + id);
    container.style.display = (container.style.display === 'none') ? 'flex' : 'none';
}

/*Form for submit order*/
function showAccountInput(productId) {
    var paymentMethod = document.getElementById('paymentMethod' + productId).value;
    var accountInput = document.getElementById('accountInput' + productId);
    accountInput.style.display = (paymentMethod === 'GCASH' || paymentMethod === 'BANK') ? 'block' : 'none';
}



// Global variable to track login status
let isLoggedIn = false;

function login() {
    isLoggedIn = true;
    alert("Login successful!");
}

function addToCart(itemId) {
    if (!isLoggedIn) {
        alert("Please log in to add items to the cart.");
        return;
    }
    // Logic to add item to cart
    alert("Your order has been added to cart!");
}


// Function to check if all required fields in My Profile Section are filled up
function checkRequiredFields() {
    const profileInputs = document.querySelectorAll('#myprofile input[type="text"], #myprofile input[type="date"]');
    
    // Check if any required field is empty
    for (let input of profileInputs) {
        if (!input.value.trim()) {
            return false;
        }
    }
    // All required fields are filled up
    return true;
}

// Function to handle submitting order
function submitOrder(itemId) {
    if (checkRequiredFields()) {
        // Show success message or redirect to confirmation page
        alert("Order submitted successfully!");
    } else {
        // if some required fields in My Profile section are empty
        // Display a message asking the user to fill up all required information
        alert("Kindly ensure all necessary details are provided in the My Profile section before proceeding with your order..");
    }
}

