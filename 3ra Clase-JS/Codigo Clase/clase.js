// FOR

/*
for (let i = 0; i < 3; i++) {
    let numero = parseInt(prompt("Ingrese un numero"));
    console.log("Numero ingresado + 1:", numero+1);
}

let numero = prompt("Ingrese un numero del 1 al 10 y le muestro la tabla")
for (let i = 0; i < 11; i++) {
    console.log(numero, "x", i, ":", numero*i)
}
*/

// WHILE

/*
for (let i = 0; i < 3; i++) {
    let num1 = parseInt(prompt("Ingrese un numero"));
    let num2 = parseInt(prompt("Ingrese un numero"));
    
    if (num2 == 0 || num1 == 0) {
        console.log("No se puede dividir por 0")
        continue
    }
    console.log("El resultado de la division es:", num1/num2)
}
*/

//EJERCICIO

let num1;
let num2;
let salir = "";

for (let i = 0; i < 3; i++) {
    while (salir != "S") {

        num1 = parseInt(prompt("Ingrese un numero"));
        num2 = parseInt(prompt("Ingrese un numero"));
    
        if (num1 != 0 || num2 != 0 ) {
            console.log("El resultado de la division es:", num1/num2)
        }
        salir = prompt("Ingrese S para SALIR o C para CONTINUAR");
    }
    
}


//EJERCICIO

let votacion = "";
let contA = 0;
let contB = 0;

while (votacion != "SALIR") {
    votacion = prompt("Voto A, B o SALIR")
    if(votacion == "A"){
        contA++
    } else if (votacion == "B") {
        contB++
    } else {
        console.log("VOTO NULO")
    }

}

console.log("A:",contA,"y B:", contB)

if (contA > contB) {
    console.log("Ganó A")
} else if (contB > contA){
    console.log("Ganó B")
} else {
    console.log("Empate")
}



//DO...WHILE