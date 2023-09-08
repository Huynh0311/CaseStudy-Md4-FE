let cart = [];
function addToCart(item) {
    cart.push(item);
    displayCart();
}

function removeFromCart(itemIndex) {
    cart.splice(itemIndex, 1);
    displayCart();
}

function displayCart() {
    const cartElement = document.getElementById("cart");
    let cartHtml = "<h2>Giỏ hàng của bạn</h2>";

    if (cart.length === 0) {
        cartHtml += "<p>Giỏ hàng của bạn đang trống.</p>";
    } else {
        cartHtml += "<ul>";
        cart.forEach((item, index) => {
            cartHtml += `<li>${item.name} - Giá: ${item.price} <button onclick="removeFromCart(${index})">Xóa</button></li>`;
        });
        cartHtml += "</ul>";
    }

    cartElement.innerHTML = cartHtml;
}

function calculateSummary() {
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
    });
    return total;
}

function placeOrder() {

    cart = [];
    displayCart();

    const summaryElement = document.getElementById("summary");
    summaryElement.innerHTML = `<h2>Tóm tắt Đơn hàng</h2><p>Tổng giá: $${calculateSummary()}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const itemName = button.getAttribute("data-name");
            const itemPrice = parseFloat(button.getAttribute("data-price"));
            addToCart({ name: itemName, price: itemPrice });
        });
    });
});