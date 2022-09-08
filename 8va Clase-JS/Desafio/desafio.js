let products = document.querySelectorAll(".btn_item")

for (let p of products) {
    p.addEventListener("click", add_to_cart)
}

let cart = [ //array con objetos/productos en el cart
] 

function add_to_cart(e){
    let btn = e.target
    let btn_name = btn.parentNode
    let card = btn_name.parentNode

    let name_product = btn_name.querySelector("h3").textContent
    let price_product = parseFloat(btn_name.querySelector("span").textContent)
    let photo_product = card.querySelector("img").src

//constructor de un objeto por producto
    let product = {
        name: name_product,
        price: price_product,
        photo: photo_product,
        //stock: 0,
        count: 1
    }
    
    cart.push(product)    

    // let total_count_per_price = cart.find((product, cart) => item.name === cart.name)
    let total_price = parseFloat(cart.reduce((acc, p) => acc + p.price, 0))
    
    console.log(product.name + " was added to the cart", "\nList of products in cart:" , cart,  "\nTotal price:", total_price)
    return total_price
}