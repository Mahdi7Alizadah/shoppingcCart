//Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let products = document.getElementsByTagName('button');

document.getElementById('open-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle('hide');
});

//Function declarations, add code inside {}
function updateCart() {
    listProductsInCart();
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;
}
function listProductsInCart() {
    let cartProducts = '';

    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += `<li><span class="product-title">Titel: </span>${shoppingCart[i]} <button class="delete-btn" onclick="removeProduct('${shoppingCart[i]}')">x</button></li>`; // lägg till ett li-element i cartProducts
    }
    document.getElementById('products').innerHTML = cartProducts;
}

function removeProduct(product){
    for (let i = 0; i < shoppingCart.length; i++) {
        if(shoppingCart[i] == product){
            shoppingCart.splice(i, 1)  
        }
    }
    updateCart() 
}

//For-loops of two arrays

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function(event) {
        let product = event.target.parentNode.getAttribute('data-product');
        if(shoppingCart.indexOf(product) === -1 ){
            shoppingCart.push(product);
            updateCart();
        }
        else {
            alert('This product has already been added to the shopping cart.') // så visas detta meddelande istället.
        }
    });
}


//Function calls and there should be two listProductsInCart()

listProductsInCart();