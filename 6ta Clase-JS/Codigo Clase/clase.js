// ARRAYS

let lista_random = [30, "Pepe", 50, ["raton", "gato", "perro"], "Marta", true]

console.log(lista_random[3][2])
console.log(lista_random[1])

let lista_alumno = ["gra", "mara", "louis"]                 //Crea array
console.log("Lista:", lista_alumno)

lista_alumno.push("ana<---")                                //Agrega en la ultima posicion a un array
console.log("Lista:", lista_alumno)

lista_alumno.unshift("--->isa")                             //Agrega en la primera posicion
console.log("Lista:", lista_alumno)

let alumno_shift = lista_alumno.shift()                     //Remueve en la primera posicion
console.log("Lista:", lista_alumno)
console.log("Shift:", alumno_shift)

let alumno_pop = lista_alumno.pop()                         //Remueve en la ultima posicion
console.log("Lista:", lista_alumno)
console.log("Pop:", alumno_pop)

let alumno_join = lista_alumno.join(" * ")                  //Acomoda la lista y usa el separador que se le envie
console.log("Lista:", lista_alumno)
console.log("Join:", alumno_join)

let alumno_splice1 = lista_alumno.splice(1,1)               //En posicion 1, Eliminar 1 valor
let alumno_splice2 = lista_alumno.splice(1, 2, "ally", "viv") //En posicion 1, Elimina 2 valores y agrega 2 valores más "" ""
console.log("Lista:", lista_alumno)
console.log("Splice 1:", alumno_splice1, "Splice 2:", alumno_splice2)

let lista_nueva = ["retro", "chris", "tony"]                //Concatena dos arrays
console.log("Nueva:", lista_nueva)
let lista_concatenada = lista_alumno.concat(lista_nueva)
console.log("Concatenada:", lista_concatenada)

let corte = lista_concatenada.slice(1,3)                    //Recorta los elementos basados en el rango que se envia, el ultimo numero no se incluye (como si fuese un <>)
console.log("Lista:", lista_concatenada)
console.log("Slice:", corte)

console.log("El indice de gra es:", lista_concatenada.iOf("gra"))//para saber el i

lista_concatenada.reverse()
console.log(lista_concatenada)

for (let i = 0; i < lista_alumno.length; i++) {
    console.log("Alumno:", lista_alumno[i] + ", en la vuelta:", i)
}




