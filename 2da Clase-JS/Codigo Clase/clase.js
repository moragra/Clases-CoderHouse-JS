// OPERADORES RELACIONALES

// IGUALDAD ==

let result = 10 ==10;
console.log(result)

let x = 20;
let y = 50;

console.log(x+30 == 50)
console.log(x==y)

//  MAYOR, MENOR O IGUAL

console.log(30>50)
console.log(30<50)
console.log(50<=50)

// DISTINTO

console.log(10!=10)

// PROMPT

let num_uno = prompt("Ingrese un numero");
let num_dos = prompt("Ingrese otro numero");
let operacion = prompt("suma: +   resta: -   multiplicacion: *   division: /")

// IF - ELSE IF - ELSE

if (operacion == "+") {
    let suma = parseFloat(num_uno) + parseFloat(num_dos);
    console.log("La suma de los numero es: ", suma)
} else if (operacion == "-") {
    let resta = parseFloat(num_uno) + parseFloat(num_dos);
    console.log("La resta de los numero es: ", resta)
} else if (operacion == "*") {
    let resta = parseFloat(num_uno) * parseFloat(num_dos);
    console.log("La multiplicacion de los numero es: ", resta)
} else if (operacion == "/") {
    let resta = parseFloat(num_uno) / parseFloat(num_dos);
    console.log("La division de los numero es: ", resta)
} else {
    console.log("Operacion incorrecta")   
}

// PRACTICA

let edad = parseInt(prompt("Ingrese la edad"));
let tutor = parseInt("Vino con tutor? y/n")

if (edad >= 18){
    console.log("Bienvenide!")
} else if (edad >= 16 && tutor == "y"){
    console.log("Bienvenide!")
} else if (edad >= 16 && tutor == "n"){
    console.log("No podes ingresar")
} else {
    console.log("No podes ingresar")
}