// function saludar(){
//     console.log("Hola!")
// }

let btn_test = document.getElementById("btn_test")

//Event Listener

btn_test.addEventListener("click", function(){
    console.log("Testeando EventListener")
})

let btn_otro = document.getElementById("btn_otro")

// btn_otro.onclick =  () => console.log("otro btn")

btn_otro.addEventListener("mousedown", function(e){
    console.log("Mousedown")
    if (e.button == 0) {
        console.log("botton izq")
    } else if (e.button == 2){
        console.log("botton der")
    } else if (e.button == 1){
        console.log("click ruedita")
    } else {
    console.log(e)
    }
})

btn_otro.addEventListener("mouseup", function(){
    console.log("Mouseup")
})

btn_otro.addEventListener("click", function(){
    console.log("Click")
})

btn_otro.addEventListener("mouseover", function(e){
    console.log("Mouseover")
    console.log(e.button)
})

let img = document.getElementById("imagen")

img.addEventListener("mouseover", function(){
    img.src = "img2.jpeg"
})

img.addEventListener("mouseout", function(){
    img.src = "img1.jpeg"
})

window.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp"){
        this.document.body.style.background = "blue"
    } else if (e.key == "ArrowDown"){
        this.document.body.style.background = "white"
    }
})

