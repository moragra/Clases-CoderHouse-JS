let products = [ //array con todos los productos de la pagina
    {name: "b", price: 50, stock: 5, count:0},
    {name: "Abs Rug", price: 30, stock: 3, count:0},
    {name: "Arch Rug", price: 55, stock: 2, count:0},
    {name: "Trio Color Rug", price: 50, stock: 7, count:0},
    {name: "unclarito Rug", price: 120, stock: 3, count:0},
    {name: "Orange Palette Rug", price: 70, stock: 2, count:0},
    {name: "Pink unclarito Rug", price: 80, stock: 6, count:0},
    {name: "Frame unclarito Rug", price: 80, stock: 5, count:0},
    {name: "Black dots unclarito Rug", price: 80, stock: 7, count:0},
]

console.log("List of products:" , products)

//constructor de un objeto por producto
function item (name, price, stock, count){
    this.name = name
    this.price = price
    this.stock = stock
    this.count = count
}

let cart = [ //array con objetos/productos en el cart
{name: "b", price: 50, stock: 5, count:1},
{name: "Abs Rug", price: 30, stock: 3, count:1},
{name: "Arch Rug", price: 55, stock: 2, count:1}
] 
console.log("List of products in cart:" , cart)

let choose_product = prompt("Please enter the name of the product you want to search")

//Encuentra el producto a comprar dentro del arreglo con la lista de objetos/productos ya creados
function find_products (product){
    if (product.name == choose_product) {
        alert("Product found!", choose_product) //imprime objeto encontrado con sus propiedades 
        return product.name == choose_product
    } 
    // else {
    //     alert("Product not found!", choose_product) 
    // }
}

let found_products = products.find(find_products) //imprime objeto encontrado con sus propiedades 

// Add to cart

function add_to_cart(){
    let add_to_cart_Q = prompt("Do you want to add " + found_products.name + " to the cart? Y/N")
    if(add_to_cart_Q == "Y" || add_to_cart_Q == "y"){
        cart.push(found_products)
        for (let p of products) {
            if (found_products.name === p.name) {
                p.stock--
                p.count++
            }
        }
        alert("Se agrego 1 item de " + found_products.name + " al carrito")
    } else {
        alert("See you soon! Have a great day!")
    }
}

add_to_cart()

let final_cart = cart.reduce((acc, p) => acc + p.price, 0)

console.log("The total to pay is: " + final_cart)
alert("The total to pay is: " + final_cart)

function promo_code (){
    let promo_code_Q = prompt("Have a promo code? Y/N")
    if (promo_code_Q == "y" || promo_code_Q == "Y"){
        let code = prompt("Enter the promo code")
        if (code == "AAA" || code == "aaa"){
            let promo_applied = final_cart * 0.30
            let total = final_cart - promo_applied
            console.log("<----------------------->")
            console.log("Your total cost with the promo code is: " + total)
            return total
        } else {
            alert("Invalid promo code!")
            console.log("<----------------------->")
            console.log("Your total cost is: " + final_cart)
            return final_cart
        }
    } else {
        console.log("<----------------------->")
        console.log("Your total cost is: " + final_cart)
        return final_cart
    }
}

promo_code()

// let cc_name 
// let cc_number
// let cc_ccv 
// let cc_exp
// let amount_cards = parseInt(prompt("Enter the amount of cards to add to wallet"))

// class cc_card {
//     constructor(cc_name, cc_number, cc_ccv, cc_exp){
//         this.cc_name = cc_name
//         this.cc_number = cc_number
//         this.cc_ccv = cc_ccv
//         this.cc_exp = cc_exp
//     }
// }

// let cc_cards = []

// for (let i = 1; i <= amount_cards; i++) {
//     cc_name = prompt("Enter the card holder name")
//     cc_number = parseInt(prompt("Enter the card number"))
//     cc_ccv = parseInt(prompt("Enter the CCV"))
//     cc_exp = parseInt(prompt("Enter the expiration date"))

//     let card = new cc_card (cc_name, cc_number, cc_ccv, cc_exp)
//     cc_cards.push(card)

// }

// for (let card of cc_cards) { //Lleva ese orden por el orden en que esta en el UI
//     console.log("<----------------------->")
//     console.log("Card Number:", cc_number)
//     console.log("Card Holder Name:", cc_name)
//     console.log("Exp:", cc_exp)
//     console.log("CCV:", cc_exp)
// }