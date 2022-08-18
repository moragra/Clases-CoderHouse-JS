let name_product
let price_product
let num_product

//1.1/3 Empieza desafío complementario clase 6
class products {
    constructor(name_product, price_product, num_product){
        this.name_product = name_product
        this.price_product = price_product
        this.num_product = num_product
    }
}

let products_array = []
let amount_purchase = parseInt(prompt("Please enter the number of products you want to input"))

for (let i = 1; i <= amount_purchase; i++) {
    name_product = prompt("Input the name of product " + i)
    price_product = parseFloat(prompt("Input the unit price of " + name_product))
    num_product = parseInt(prompt("Input the amount of " + name_product + "s you want to purchase"))

    let new_product = new products(name_product, price_product, num_product)
    products_array.push(new_product)
    
}

for (let product of products_array) {
    console.log("<----------------------->")
    console.log("Name of product:",product.name_product)
    console.log("Amount:", product.num_product)
    console.log("Price per unit:", product.price_product)
}

//1.2/3 Finaliza desafío complementario clase 6

function total_cost (price_product, num_product){
    let cost = price_product * num_product
    return cost
}

let promo_code_Q = prompt("Have a promo code? Y/N")

function promo_code (promo_code_Q){
    if (promo_code_Q == "y" || promo_code_Q == "Y"){
        let code = prompt("Enter the promo code")
        if (code == "AAA"){
            let promo_applied = total_cost(price_product, num_product) * 0.30
            let total = total_cost(price_product, num_product) - promo_applied
            console.log("<----------------------->")
            console.log("Your total cost with the promo code is: " + total)
            return total
        } else {
            alert("Invalid promo code!")
            console.log("<----------------------->")
            console.log("Your total cost is: " + total_cost(price_product, num_product))
            return total_cost(price_product, num_product)
        }
    } else {
        console.log("<----------------------->")
        console.log("Your total cost is: " + total_cost(price_product, num_product))
        return total_cost(price_product, num_product)
    }
}

total_cost(price_product, num_product)
promo_code(promo_code_Q)

//1.3/3 Empieza desafío complementario clase 6

let cc_name 
let cc_number
let cc_ccv 
let cc_exp
let amount_cards = parseInt(prompt("Enter the amount of cards to add to wallet"))

class cc_card {
    constructor(cc_name, cc_number, cc_ccv, cc_exp){
        this.cc_name = cc_name
        this.cc_number = cc_number
        this.cc_ccv = cc_ccv
        this.cc_exp = cc_exp
    }
}

let cc_cards = []

for (let i = 1; i <= amount_cards; i++) {
    cc_name = prompt("Enter the card holder name")
    cc_number = parseInt(prompt("Enter the card number"))
    cc_ccv = parseInt(prompt("Enter the CCV"))
    cc_exp = parseInt(prompt("Enter the expiration date"))

    let card = new cc_card (cc_name, cc_number, cc_ccv, cc_exp)
    cc_cards.push(card)

}

for (let card of cc_cards) { //Lleva ese orden por el orden en que esta en el UI
    console.log("<----------------------->")
    console.log("Card Number:", cc_number)
    console.log("Card Holder Name:", cc_name)
    console.log("Exp:", cc_exp)
    console.log("CCV:", cc_exp)
}