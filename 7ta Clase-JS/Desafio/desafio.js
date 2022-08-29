
//falta crear clase con constructor para poder hacer push si se crean nuevos productos -> opcion solo para el lado del cliente/dueño de pagina

let existing_products_array = [ //array con todos los productos de la pagina
    {name_product: "b", price_product: 50, stock_product: 5, amount_purchase:0},
    {name_product: "Abs Rug", price_product: 30, stock_product: 3, amount_purchase:0},
    {name_product: "Arch Rug", price_product: 55, stock_product: 2, amount_purchase:0},
    {name_product: "Trio Color Rug", price_product: 50, stock_product: 7, amount_purchase:0},
    {name_product: "unclarito Rug", price_product: 120, stock_product: 3, amount_purchase:0},
    {name_product: "Orange Palette Rug", price_product: 70, stock_product: 2, amount_purchase:0},
    {name_product: "Pink unclarito Rug", price_product: 80, stock_product: 6, amount_purchase:0},
    {name_product: "Frame unclarito Rug", price_product: 80, stock_product: 5, amount_purchase:0},
    {name_product: "Black dots unclarito Rug", price_product: 80, stock_product: 7, amount_purchase:0},
] 

console.log("Products available:" , existing_products_array)
class cart { //constructor de un objeto por producto agregado
    constructor(name_product, price_product, stock_product, amount_purchase){
        this.name_product = name_product
        this.price_product = price_product
        this.stock_product = stock_product
        this.amount_purchase = amount_purchase
    }
}

let products_on_cart = [ //array con objetos/productos en el cart
    {name_product: "b", price_product: 50, stock_product: 5, amount_purchase:1},
    {name_product: "b", price_product: 50, stock_product: 5, amount_purchase:1},
    {name_product: "Abs Rug", price_product: 30, stock_product: 3, amount_purchase:2},
    {name_product: "Arch Rug", price_product: 55, stock_product: 2, amount_purchase:1},
    {name_product: "Arch Rug", price_product: 55, stock_product: 2, amount_purchase:1}
]
console.log("Products in cart:", products_on_cart)

//Nombre del producto a comprar
let choose_product = prompt("Please enter the name of the product you want to search")

//Encuentra el producto a comprar dentro del arreglo con la lista de objetos/productos ya creados
function find_products (product){
    return product.name_product == choose_product
}

//Output del producto encontrado
// let output_find_products = new Object();
let found_products = existing_products_array.find(find_products)
console.log("Product found!", found_products) //imprime objeto encontrado con sus propiedades 

//variables de producto agregado al carrito
let name_product
let price_product
let stock_product
let amount_purchase

//guardo en la variable el ultimo property del objeto
let lastKey = Object.keys(found_products).pop()
// console.log(lastKey)

//guardo en variable el valor del ultimo property del objeto
let lastValue = parseInt(Object.values(found_products).splice(-1))
console.log("Amount on cart:" , lastValue, "of", found_products.name_product)

// Revisar si hay stock del ultimo producto preguntado -> volver funcion (no se como usar el valor de lastValue y lastKey dentro de una funcion)
if (found_products.stock_product > 0) {
    console.log("We have stock!")

    //Agrega al cart el producto buscado
    let add_to_cart_Q = prompt("Do you want to add " + found_products.name_product + " to the cart? Y/N")
    if (add_to_cart_Q == "Y" || add_to_cart_Q == "y") {
        lastValue = lastValue + 1
        found_products.amount_purchase = lastValue
        alert("Se agrego 1 item de " + found_products.name_product + " al carrito")
        found_products = new cart(name_product, price_product, stock_product, amount_purchase)
        products_on_cart.push(found_products)
        console.log(products_on_cart)
    } else if (add_to_cart_Q == "N" || add_to_cart_Q == "n") {
        let different_product = prompt("Where you looking for a different product? Y/N")
        if (different_product == "Y" || different_product == "y"){
            found_products = existing_products_array.find(find_products)
            console.log("Product found!", found_products)
        } else {
            alert("See you soon! Have a great day!")
        }
    } else {
        alert("See you soon! Have a great day!")
    }
} else {
    alert("We are out of stock!")
}

//Filtrar cuales de los productos ya en carrito son iguales para agregarlo en si mismo
for (product of products_on_cart) {
    function filter_added_products(product){
        return product.name_product == choose_product
    }
}

let output_filter_added_products = products_on_cart.filter(filter_added_products)
console.log("Filter:", output_filter_added_products)

function sum_per_product(acu, product){
    acu = acu + product.amount_purchase
    return acu
}

let output_sum_per_product = products_on_cart.reduce(sum_per_product)
console.log("Sum per product:",output_filter_added_products)

// function total_cost_per_product(acu, product){
//     acu = acu + (product.price_product * product.num_product)
//     return acu
// }

// let output_total_cost = products_array.reduce(total_cost_per_product, 0)
// console.log("Total cost for", output_total_cost)



// function remove_from_cart (acu, product){
//     acu = acu + (product.num_product - 1)
//     return acu
// }

// let output_remove_from_cart = products_array.reduce(remove_from_cart, 0)
// console.log("Add to cart:", output_remove_from_cart)






// function add_products_site(product){//productos nuevos a agregar por el cliente
//     //input de la cantidad de productos que se van a agregar a la pagina
//     let new_products = parseInt(prompt("Please enter the number of products you want to input")) 

//     for (let i = 1; i <= new_products; i++) {
//         product.name_product = prompt("Input the name of product " + i)
//         product.price_product = parseFloat(prompt("Input the unit price of " + product.name_product))
//         product.stock_product = parseInt(prompt("Input the stock of the product"))
        
//         let new_product_array = new existing_products_array (product.name_product, product.price_product, product.stock_product)
//         existing_products_array.push(new_product_array)
        
//     }
//