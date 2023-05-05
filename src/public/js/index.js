console.log("entre al index")
const socket = io()
const description1 = document.getElementById("description")
const title1 = document.getElementById("title")
const price1 = document.getElementById("price")
const thumbnail1 = document.getElementById("thumbnail")
const stock1 = document.getElementById("stock")
const code1 = document.getElementById("code")
const id1 = document.getElementById("id")
const submit = document.getElementById("button")
const products = document.getElementById("PRD")
const deletebt = document.getElementById("deletebt")



const deleteprd = (id)=>{
    fetch(`http://localhost:8080/realTimeProducts/${id}`, {method:"DELETE"})
    console.log("entre al delte")
    socket.emit("delete")
}

/* deletebt.addEventListener("click",async e=>{
    e.preventDefault()
    console.log("delteamos")
    deleteprd()

})
 */
submit.addEventListener("click", async e => {
    e.preventDefault()
    console.log("entro al event listener")


    let title = title1.value
    let description = description1.value
    let price = price1.value
    let thumbnail = thumbnail1.value
    let stock = stock1.value
    let code = code1.value


    socket.emit("newprd", { title, description, price, thumbnail, stock, code })


    title.value = "";
    description.value = "";
    price.value = "";
    thumbnail.value = "";
    stock.value = "";
    code.value = ""



})

socket.on('form', dataprd => {
    console.log("entre a data form", dataprd)

    let logs = '';
    dataprd.prdArray.forEach(element => {
        logs = logs + `<div>
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <img src=${element.thumbnail} alt="Imagen del producto">
        <p>Precio: ${element.price}</p>
        <p>Stock: ${element.stock}</p>
        <p>ID: ${element.id}</p>
        <button type="button" id="deletebt" onclick="deleteprd(${element.id})">x</button>

        </div>`

    });


    products.innerHTML = logs
})