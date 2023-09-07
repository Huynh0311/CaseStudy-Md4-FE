let token = localStorage.getItem('token');

function getAll() {
    // Tạo ra 1 request.
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + token
        },
        url: "http://localhost:8080/accounts",
        success: function (data) {
            show(data);
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });
}

getAll();

function show(arr) {
    let str = "";
    for (const a of arr) {
        str += ` <tr>
                <td>${a.id}</td>
                <td>${a.username}</td>
                <td>${a.password}</td>
                <td>`
        for (const r of a.roles) {
            if (a.roles.indexOf(r) ===( a.roles.length - 1)) str +=`${r.name}`;
            else str +=`${r.name}, `;
        }
        str += `</td>
                <td><button type="button" class="btn btn-warning" data-toggle="modal" onclick="showEdit(${a.id})" data-target="#ModalEdit">Edit</button></td>
                <td><button type="button" class="btn btn-danger" data-toggle="modal" onclick="getId(${a.id})" data-target="#ModalDelete">Delete</button></td>
             </tr> `;
    }
    document.getElementById("show").innerHTML = str;
}