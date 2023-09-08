var params = new window.URLSearchParams(window.location.search);
var idP = params.get('id');

function getAll() {
    // Tạo ra 1 request.
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: "http://localhost:8080/api/product/" + idP,
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

function show(p) {
    str = `<div class="container">
                <div class="row gx-5">
                    <aside class="col-lg-6">
                        <div class="border rounded-4 mb-3 d-flex justify-content-center">
                            <a data-fslightbox="mygalley" class="rounded-4" data-type="image">
                                <img style="width: 624px; height: 453px; margin: auto;" class="rounded-4 fit" id="imgThumbnail"
                                     src="${p.imgProduct.thumbnail}"/>
                            </a>
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <div data-fslightbox="mygalley" class="border mx-1 rounded-2" data-type="image" 
                               class="item-thumb">
                                <img width="60" height="60" class="rounded-2" id="imgElement" onclick="showImg(this.src)"
                                     src="${p.imgProduct.thumbnail}"/>
                            </div>
                            <div data-fslightbox="mygalley" class="border mx-1 rounded-2" data-type="image"
                               class="item-thumb">
                                <img width="60" height="60" class="rounded-2" id="imgElement" onclick="showImg(this.src)"
                                     src="${p.imgProduct.img1}"/>
                            </div>
                            <div data-fslightbox="mygalley" class="border mx-1 rounded-2" data-type="image"
                               class="item-thumb">
                                <img width="60" height="60" class="rounded-2" id="imgElement" onclick="showImg(this.src)"
                                     src="${p.imgProduct.img2}"/>
                            </div>
                            <div data-fslightbox="mygalley" class="border mx-1 rounded-2" data-type="image"
                               class="item-thumb">
                                <img width="60" height="60" class="rounded-2" id="imgElement" onclick="showImg(this.src)"
                                     src="${p.imgProduct.img3}"/>
                            </div>
                        </div>
                        <!-- thumbs-wrap.// -->
                        <!-- gallery-wrap .end// -->
                    </aside>
                    <main class="col-lg-6">
                        <div class="ps-lg-3">
                            <h4 class="title text-dark">
                                ${p.name}
                            </h4>
                            <div class="d-flex flex-row my-3">
                                <div class="text-warning mb-1 me-2">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span class="ms-1">
                            4.5
                          </span>
                                </div>
                                <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                <span class="text-success ms-2">In stock</span>
                            </div>
            
                            <div class="mb-3">
                                <span class="h5">$${p.price}</span>
                                <span class="text-muted">/per box</span>
                            </div>
            
                            <p>
                                ${p.describes}
                            </p>
            
                            <div class="row">
                                <dt class="col-3">Loại:</dt>
                                <dd class="col-9">${p.category.name}</dd>
            
                                <dt class="col-3">Số lượng</dt>
                                <dd class="col-9">${p.quantity}</dd>
            
                                <dt class="col-3">Shop</dt>
                                <dd class="col-9">${p.shop.name}</dd>
                            </div>
            
                            <hr/>
            
                            <div class="row mb-4">
                                <div class="col-md-4 col-6">
                                    <label class="mb-2">Size</label>
                                    <select class="form-select border border-secondary" style="height: 35px;">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                                <!-- col.// -->
                                <div class="col-md-4 col-6 mb-3">
                                    <label class="mb-2 d-block">Quantity</label>
                                    <div class="input-group mb-3" style="width: 170px;">
                                        <button class="btn btn-white border border-secondary px-3" type="button"
                                                id="button-addon1" data-mdb-ripple-color="dark">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <input type="text" class="form-control text-center border border-secondary"
                                               placeholder="14" aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"/>
                                        <button class="btn btn-white border border-secondary px-3" type="button"
                                                id="button-addon2" data-mdb-ripple-color="dark">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
                            <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart
                            </a>
                            <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i
                                class="me-1 fa fa-heart fa-lg"></i> Save </a>
                        </div>
                    </main>
                </div>
            </div>`
    document.querySelector(".showProduct").innerHTML = str;
}

function showImg(src) {
    document.getElementById("imgThumbnail").src = src;
}
