let num1 = parseFloat(prompt("Ingrese un numero"))
let num2 = parseFloat(prompt("Ingrese un numero"))

function suma_dos_num (num1, num2){
    let suma = num1 + num2
    console.log("La suma es:", suma)
}

suma_dos_num(60, 30)

function saludar (nombre){
    console.log("Bienvenide," , nombre)
}

saludar("Graciela")

function resta (numero1, numero2){
    if (typeof numero1 == "number" && typeof numero2 == "number"){
        console.log("El resultado de la resta es:", (numero1-numero2))
    } else {
        console.log ("Solo acepto numeros")
    }
}

resta(10,2)
resta(10, "gra")

function mmayor_de_eddad (edad) {
    if (edad >= 18){
        console.log("Entra al boliche")
    } else {
        console.log("No podes entrar al boliche")
    }
}

mmayor_de_eddad(17)
mmayor_de_eddad(18)

console.log("Bienvenido a MercadoLebre")

let prod = prompt("Ingrese el nombre del producto")
let precio_prod = parseFloat(prompt("Ingrese el precio del producto"))

console.log("<------------------------>")
console.log("Nombre:", prod)
console.log("Precio:", precio_prod)

function cal_iva(precio_prod){
    let iva = precio_prod * 0.21
    return iva
}

console.log(cal_iva(precio_prod))
console.log(cal_iva(precio_prod)+precio_prod)
console.log(-cal_iva(precio_prod)+precio_prod)

