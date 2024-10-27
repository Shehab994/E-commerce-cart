

let products = [
    {
        name: 'Ray-Ban',
        price: 1200,
        rating: 4.8,
        rated: 120,
        img: 'Img/carve-slime2.jpg'
    },
    {
        name: 'Haven Sunglass',
        price: 1300,
        rating: 4.5,
        rated: 112,
        img: 'Img/style-girl5.jpg'
    },
    {
        name: 'Maui Jim ',
        price: 1100,
        rating: 4.9,
        rated: 155,
        img: 'Img/squar-sunglass4.jpg'
    },

    {
        name: 'Mykita Sunglass',
        price: 1000,
        rating: 4.5,
        rated: 106,
        img: 'Img/sunglass (9).webp'
    },

    {
        name: 'Maui Jim ',
        price: 1400,
        rating: 4.7,
        rated: 160,
        img: 'Img/squar-sunglass3.jpg'
    },
    {
        name: 'Tom Ford',
        price: 1300,
        rating: 4.4,
        rated: 173,
        img: 'Img/slime-frame3.jpg'
    },
    {
        name: 'Persol Sunglass',
        price: 1150,
        rating: 4.8,
        rated: 144,
        img: 'Img/flat-frame4.jpg'
    },
    {
        name: 'Gucci Sunglass',
        price: 1400,
        rating: 4.9,
        rated: 210,
        img: 'Img/Sb8049c4668cd4864aeb1a4c12d205be4j.jpg'
    },
    {
        name: 'Gucci Sunglass',
        price: 1400,
        rating: 4.9,
        rated: 210,
        img: 'Img/carve-slime1.jpg'
    },
    {
        name: 'Gucci Sunglass',
        price: 1400,
        rating: 4.9,
        rated: 210,
        img: 'Img/carve-slime3.jpg'
    },
    {
        name: 'Gucci Sunglass',
        price: 1400,
        rating: 4.9,
        rated: 210,
        img: 'Img/style-girl7.jpg'
    },
    {
        name: 'Gucci Sunglass',
        price: 1400,
        rating: 4.9,
        rated: 210,
        img: 'Img/sunglass (10).webp'
    },
]

let productCart = document.querySelector('.products-cart');

function showProduct() {
    products.forEach((item, key) => {
        let product = document.createElement('div');
        product.classList.add('product');

        product.innerHTML = `
             <img src="${item.img}" alt="">
             <div class="name">${item.name}</div>
            <div class="ratings">
            <div class="rate"><i class="bi bi-star-fill"></i> ${item.rating}</div>
             <div class="review">Review : (${item.rated})</div>
            </div>
            <div class="buttons">
                <div class="price">Price : $${item.price}</div>
            <button onclick="addToCart(${key})"><i class="bi bi-suit-heart-fill"></i> Add Cart</button>
            </div>
        `
        productCart.appendChild(product);
    })
}
showProduct();

let cart = document.querySelector('.cart');
function showCart() {
    cart.classList.toggle('cart-show');

}
function removeCart() {
    cart.classList.toggle('cart-show');

}


if (localStorage.getItem('shopping') == null) {
    localStorage.setItem('shopping', '[]');
}

let getShoppingCart = JSON.parse(localStorage.getItem('shopping'));


function addToCart(id) {

    products[id].quantity = 1;
    getShoppingCart.push(products[id]);
    localStorage.setItem('shopping', JSON.stringify(getShoppingCart));

    importCart();
    showToast(id);
}
let cartList = document.querySelector('.cart-list');
function importCart() {
    cartList.innerHTML = '';
    let total = 0;
    let count = 0;
    getShoppingCart.forEach((item, key) => {
        let li = document.createElement('li');
        li.classList.add('list');
        count += item.quantity;
        total += item.quantity * item.price;
        li.innerHTML = `
     <img src="${item.img}" alt="">
    <div class="names">
        <div class="name">${item.name}</div>
        <div class="price">Price : $${item.price}</div>
    </div>
    <div class="buttons">
        <button onclick="changeCount(${key},${item.quantity - 1})">-</button>
        <div class="counter">${item.quantity}</div>
        <button onclick="changeCount(${key},${item.quantity + 1})">+</button>
    </div>
    `
        cartList.appendChild(li);

    })
    document.querySelector('.total').innerHTML = `Total : $${total}`;
    document.querySelector('.count').innerHTML = `Items (${count})`;
    document.querySelector('.navCount').innerHTML = `<i class="bi bi-cart3"></i> $${total}`;
    document.querySelector('.cart-counter').innerHTML = `${count}`;
}

function changeCount(id, quantity) {
    if (quantity == 0) {
        getShoppingCart.splice(id, 1)
        localStorage.setItem('shopping', JSON.stringify(getShoppingCart));
    } else {
        getShoppingCart[id].quantity = quantity
        localStorage.setItem('shopping', JSON.stringify(getShoppingCart));
    }
    importCart();
}
importCart();

let toastBar = document.querySelector('.toast-bar');


function showToast(key) {
    let toastName = products[key];
    let toast = document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${toastName.name} Added.`;

    toastBar.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

let ulShow = document.querySelector('.nav-1');
function showNav() {
    ulShow.classList.toggle('show');
}