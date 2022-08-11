let product = prompt("Input a name of a product")
let price_product = parseInt(prompt("Input the price of " + product))
let num_product = parseInt(prompt("Input the amount of " + product + "s you want to buy"))

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
            return total
        } else {
            alert("Invalid promo code!")
            return total_cost(price_product, num_product)
        }
    } else {
        return total_cost(price_product, num_product)
    }
}

console.log("Your total cost is: " + total_cost(price_product, num_product))
console.log("Your total cost with the promo code is: " + promo_code(promo_code_Q))
