let name_product = prompt("Input the name of the product")
let price_product = parseFloat(prompt("Input the unit price of " + name_product))
let num_product = parseInt(prompt("Input the amount of " + name_product + "s you want to purchase"))

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
            console.log("Your total cost with the promo code is: " + total)
            return total
        } else {
            alert("Invalid promo code!")
            console.log("Your total cost is: " + total_cost(price_product, num_product))
            return total_cost(price_product, num_product)
        }
    } else {
        console.log("Your total cost is: " + total_cost(price_product, num_product))
        return total_cost(price_product, num_product)
    }
}

total_cost(price_product, num_product)
promo_code(promo_code_Q)
