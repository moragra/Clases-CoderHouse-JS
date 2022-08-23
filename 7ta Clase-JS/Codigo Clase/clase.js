function doble (num){
    return num * 2
}

function triple (num){
    return num * 3
}

function cuadruple (num){
    return num * 4
}

let resultado_doble = doble(10)
console.log("El resultado doble es:", resultado_doble)

// RETORNO DE FUNCIONES - HIGH ORDER

function crear_multiplicador(multiplicador){
    return function(num){
        return num * multiplicador
    }
}

let doble_num = crear_multiplicador(2) //guarda en la funcion el parametro que se le envia
console.log(doble_num(12)) // como retorna una funcion, se le envia un segundo valor

function saluda_todos(arr, saludar){
    for (let nombre of arr) {
        saludar(nombre)
    }
}

function saludar(nombre){
    console.log("Hola", nombre)
}

let lista_alumnos = ["Gra", "Mara", "Bella"]

saluda_todos(lista_alumnos, saludar) //cuando se llama una funcion dentro de otra no se pone () porque se hace por referencia, sino no funciona

// forEach

let numero = [1,2,3,4,5]

numero.forEach(
    function(num){ //se pasa el parametro num haciendo referencia al array, se captura el valor por iteracion
    console.log(num)
    console.log(num*2)
    }
)

// FIND, todos iteran sobre el array/objeto

let products1 = [ //un array de 4 objetos
    {name: "Rug1", price:50},
    {name: "Rug2", price:80},
    {name: "Rug3", price:60},
    {name: "Rug4", price:100}
]

function find_product(product){
    return product.price == 100
}

let output_find = products1.find(find_product)
console.log(output_find)

// FILTER, va retornar un arreglo con todos los valores que cumplan

let products2 = [
    {name: "Rug1", price:50, stock:10},
    {name: "Rug2", price:80, stock:13},
    {name: "Rug3", price:60, stock:5},
    {name: "Rug4", price:100, stock:0},
    {name: "Rug5", price:100, stock:1}
]

function find_all_products_met(product){
    return product.price <= 80
}

let output_filter = products2.filter(find_all_products_met)
console.log(output_filter)

// MAP, mapea (crea objetos)

let products3 = [
    {name: "Rug1", price:50, stock:10},
    {name: "Rug2", price:80, stock:13},
    {name: "Rug3", price:60, stock:5},
    {name: "Rug4", price:100, stock:1},
    {name: "Rug5", price:100, stock:1}
]

function sale(product){
    let disccount = product.price * 0.30
    return product.price = product.price - disccount
}

let output_disccount = products3.map(sale)
console.log(output_disccount)


function deduce_products(product){
    return stock = product.stock - 1 
}

let output_map = products3.map(deduce_products)
console.log(output_map)

// REDUCE,retorna siempre un valor, se le debe pasar un acumulador siempre

let ventas = [
    {name: "Rug1", price:50, stock:10},
    {name: "Rug2", price:80, stock:13},
    {name: "Rug3", price:60, stock:5},
    {name: "Rug4", price:100, stock:1},
    {name: "Rug5", price:100, stock:1}
]

function total_sale(acu, product){
    acu = acu + product.price
    return acu
}

let output_reduce = ventas.reduce(total_sale, 0)
console.log(output_reduce)

// SORT, reordena arregla

let products = [
    {name: "Rug1", price:50, stock:10},
    {name: "Rug2", price:80, stock:13},
    {name: "Rug3", price:60, stock:5},
    {name: "Rug4", price:100, stock:1},
    {name: "Rug5", price:100, stock:1}
]

console.log(products.sort())

function by_price(a , b){
    return a.stock - b.stock
}

let output_sort = products.sort(by_price)
console.log(output_sort)