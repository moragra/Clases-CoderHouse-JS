// let titulo = document.getElementById("titulo") //es un ohjeto documento = DOM (hace referencia)

// console.log(titulo) //saca el objeto-etiqueta-nodo
// console.log(titulo.innerText) //saca el texto dentro

// titulo.innerText = "Hola desde JS" //reemplaza

// let parrafos = document.getElementsByClassName("parrafos") //crea una coleccion/"array" con los objetos
// console.log(parrafos)

// console.log(parrafos[1].innerText) //especifico  su index

// let li = document.getElementsByTagName("li")
// console.log(li)

// for (let element of li) {
//     console.log(element)
// }

// let contenedor = document.getElementById("contenedor")

// contenedor.innerHTML = "<p>Parrafo desde JS</p>"
// contenedor.className = "parrafo_rojo"
// contenedor.style.color = "red" //estiliza el codigo html

// let parrafo_js = document.createElement("p") //crea elemento - nodo vacio, esto lo crea pero no lo asigna a ninguna parte del DOM
// parrafo_js.innerText = "parrafo desde JS"
// parrafo_js.className = "parrafo_azul"
// parrafo_js.style.color = "blue"
// parrafo_js.style.textAlign = "center"
// parrafo_js.style.fontSize = "24px"

// contenedor.append(parrafo_js) //esto me lo engancha de ultimo al DOM a contenedor id

let usuario_registrado = ["pepe", "marta"]

function saludar(){
    let nombre = document.getElementById("nombre_usuario")
    console.log("Hola", nombre.value)
}

function valudar(){
    for (const iterator of object) {
        let nombre = document.getElementById("nombre_usuario")
        let mensaje = document.getElementById("mensaje")

        if(nombre.value == usuario_registrado){
            let parrafo = document.getElementById("p")

            console.log("Logeo usuario")
        } else {
            console.log("Error Login")
        }
    }
    
}