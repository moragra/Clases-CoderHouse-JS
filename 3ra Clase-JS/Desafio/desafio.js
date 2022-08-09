let num1;
let num2;
let salir = "";

for (let i = 0; i < 3; i++) {
    while (salir != "S" && salir != "s") {

        num1 = parseInt(prompt("Ingrese un numero"));
        num2 = parseInt(prompt("Ingrese un numero"));
    
        if (num1 != 0 || num2 != 0 ) {
            console.log("El resultado de la division es:", num1/num2)
        }
        salir = prompt("Ingrese S para SALIR o C para CONTINUAR");
    }
    
}