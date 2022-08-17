// //  OBJETOS LITERALES - se encapsula y tienen correlacion los valores, coleccion de datos (un tipo de dato más: string, number, objects...)

// let usuario_uno = {
//     // key : value = properties
//     nombre:"Pepe",
//     appellido:"Lopez",
//     edad:30
// }

// let usuario_dos = {
//     nombre:"Ramon",
//     appellido:"Gomez",
//     edad:33,

//     saludar: function (){  //funcion anonima asignado a un dato
//         console.log("Hola soy" , this.nombre)
//     }
// }

// console.log(usuario_uno)
// console.log(usuario_dos)

// // DOT para llamar una propiedad individualmente

// console.log("Mi nombre es:" , usuario_uno.nombre)
// console.log("Mi nombre es:" , usuario_dos.nombre)
// usuario_dos.saludar()

// // FUNCION CONSTRUCTORA

// function usuario(nombre, apellido, edad) {
//     this.nombre = nombre //
//     this.apellido = apellido
//     this.edad = edad
// }

// let usuario_3 = new usuario("Pepe", "Mora", 24) // INSTANCIA DE USUARIO (OBJETO)
// console.log(usuario_3)

// // CLASES son un plano para crear objetos - contiene 1)funcion constructora, 2)metodos que son funciones del objeto

// class alumno_coder {
//     constructor (nombre, apellido, email, nota1, nota2){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.email = email
//         this.nota_1 = nota1
//         this.nota_2 = nota2
//     }

//     saludar() {
//         console.log("Hola mi nombre es" , this.nombre)
//     }

//     get_datos(){
//         console.log("<-----Datos Alumno----->")
//         console.log("Nombre:", this.nombre)
//         console.log("Apellido:", this.apellido)
//         console.log("Email:", this.email)
//     }

//     // set_nota_1(nota){
//     //     this.nota_1 = nota
//     // }

//     // set_nota_2(nota){
//     //     this.nota_2 = nota
//     // }

//     get_notas (){
//         console.log("Nota uno:", this.nota_1)
//         console.log("Nota dos:", this.nota_2)
//     }
// }

// let alumno_1 = new alumno_coder("luis", "perez", "fhjdsk@hjgvcx.com", 90)
// let alumno_2 = new alumno_coder("gra", "mora", "hfdjs@fhdjsk.com")

// // console.log(alumno_1.nombre)
// // console.log(alumno_2.email)
// // alumno_1.saludar()
// // alumno_2.saludar()

// alumno_1.get_datos()
// alumno_2.get_datos()
// alumno_1.get_notas()

// Ejercicio clase 5

class product {
    constructor(name, price, stock){
        this.name = name
        this.price = price
        this.stock = stock
    }

    get_datos(){
        console.log("<------Datos Productos------>")
        console.log("Name:", this.name)
        console.log("Price:", this.price)
        console.log("Stock:", this.stock)
    }

    get_stock(){
        if (this.stock <= 3){
            console.log("OJO STOCK BAJO!", this.stock)
        }
        
        return this.stock
    }

    update_stock(){
        this.stock = this.get_stock - 1
    }

}

let monitor = new product("monitor", 20000, "3")

monitor.get_datos()

if(monitor.get_stock() > 0){
    console.log("Vendimos un monitor")
    monitor.update_stock()
}

monitor.get_datos()