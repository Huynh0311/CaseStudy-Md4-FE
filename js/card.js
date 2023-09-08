let myCart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: `http://localhost:8080/api/${id}`,
        success: function (data) {
            let existingItem = myCart.find(function (cart) {
                return cart.id === data.id;
            });
            if (existingItem) {
                existingItem.cartQuantity++;
            } else {
                myCart.push({...data, cartQuantity: 1});
            }
            localStorage.setItem("cart", JSON.stringify(myCart));
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });

}


function displayCart() {
    const cartElement = document.getElementById("cart");
    let cartHtml = "<h2>Giỏ hàng của bạn</h2>";
    if (myCart.length === 0) {
        cartHtml += "<p>Giỏ hàng của bạn đang trống.</p>";
    } else {
        cartHtml += "<ul>";
        myCart.forEach((item, index) => {
            cartHtml += `<li>${item.name} - Số lượng : ${item.cartQuantity} - Giá: ${item.price} <button onclick="removeFromCart(${index})">Xóa</button></li>`;
        });
        cartHtml += "</ul>";
    }
    document.getElementById("cartHtml").innerHTML = cartHtml;
    cartElement.innerHTML = cartHtml;
}
displayCart()


