let num1;
let num2;
let salir = "";

while (salir != "S" && salir != "s") {

    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese un numero"));
    
    if (num1 != 0 || num2 != 0 ) {
        console.log("El resultado de la division es:", num1/num2)
    }
    salir = prompt("Ingrese S para SALIR o C para CONTINUAR");
}

// Primer ejemplo complemetario
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = 0
let salirr = ""

while(salir != "S" && salir != "s") {
    numero2 = parseInt(prompt("Ingrese otro numero"));
    alert("La suma de " + numero1 + " + " + numero2 + " es: " + (numero1+numero2))

    salirr = prompt("Ingrese S para salir o C para continuar")
}

// Segundo Ejemplo complemetario

let nombre = prompt("Ingrese un nombre")
let texto = ""
let exit = ""

while(exit != "S" && exit != "s") {
    texto = prompt("Ingrese algo que le quiera decir a " + nombre)
    alert(nombre + " " + texto)

    exit = prompt("Ingrese S para salir o C para continuar")
}

// Tercer Ejemplo complemetario

let cont_palabra = parseInt(prompt("Ingrese la cantidad de veces que quiere repetir la palabra"))
let palabra = prompt("Ingrese la palabra que desea repetir")

for (let i = 0; i < cont_palabra; i++) {
    console.log(palabra)
}