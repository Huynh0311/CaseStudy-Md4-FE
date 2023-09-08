let cart = localStorage.getItem("cart") == null ? [] : JSON.parse(localStorage.getItem("cart"));

function showCart() {
    let str = '';
    for (let i = 0; i < cart.length; i++) {
        let p = cart[i];
        str += `<tr>
                          <td>${p.id}</td>
                          <td>${p.name}</td>
                          <td>${p.price}</td>
                          <td>${p.status}</td>
                          <td>${p.quantity}</td>
                          <td><img src="${p.img}" width="200" height="160"></td>
                          <td><button type="button" onclick="deleteCart(${i})" class="btn btn-danger">Delete Product</button></td>
                        </tr>`
    }
    document.getElementById("show").innerHTML = str;
}

showCart();

function deleteCart(index) {
    cart.splice(index, 1);
    showCart();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function oder() {
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/products/oder",
        data: JSON.stringify(cart),
        success: function (data) {
            alert("oder thành công");
            localStorage.removeItem("cart");
            location.href = "ShowProduct.html";
        },
        error: function (err) {
            console.log(err)
        }
    });
}