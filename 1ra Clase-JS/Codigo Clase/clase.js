let edad_usuario = 20;
let nombre_usuario = "Graciela";
let tel_usuario;

console.log(edad_usuario);
console.log(nombre_usuario);

edad_usuario = 50;
console.log(edad_usuario);
// OPERADORES

console.log("--------------------");
console.log("OPERADORES");

// SUMA +
let suma = 30 + 30;
console.log(suma);

// RESTA -
let resta = 40 - 30;
console.log(resta);

// MULTIPLICACION *
let multi = 30 * 30;
console.log(multi);

// DIVISION /
let divi = 30 / 30;
console.log(divi);

//CONCATENACION

let resultado = "Graciela" + " Mora";
console.log(resultado);

resultado = "Luis " + 120;
console.log(resultado);

// INPUT & OUTPUT

console.log("--------------------");
console.log("INPUT & OUTPUT");

let edad_ingresado = prompt("Ingrese su edad");
let nombre_ingresado = prompt("Ingrese su nombre");

console.log("La edad del usuario es: ", edad_ingresado);
alert("La edad de " + nombre_ingresado + " es: " + edad_ingresado);

// prompt siempre es string 

let num__uno = prompt("Ingrese un numero");
let num__dos = prompt("Ingrese un numero");

let resultado_numero = num__uno + num__dos;

console.log("El resultado como string es:", resultado_numero);
alert(resultado_numero);

// para convertirlo prompt a numero se hace parseInt

let num__1 = prompt("Ingrese un numero");
let num__2 = prompt("Ingrese un numero");

let resultado_num = parseInt(num__1) + parseInt(num__2);

console.log("El resultado como string es:", resultado_num);
alert(resultado_num);
