let botines = 300
let camisetas = 100
let espinilleras = 15
let medias = 10
let vendaje = 25
let shorts = 45
let producto
let cantidad
let costo = 0;

let items = []

const TAX_RATE = 0.056

alert("elegi los productos deportivos que quieras")


let listo = false;
do {
    // pregunta al usuario que producto desea elegir
    producto = prompt("Tenemos botines, camisetas, espinilleras, medias, vendaje, shorts. Or enter 'done' to checkout")

    //  Si el usuario no ingresa listo en el prompt este va a preguntar por la cantidad
    if (producto !== "listo")
        cantidad = parseInt(prompt("Que cantidad deseas del producto seleccionado?"))

    // Switch statement, hace que cada case empuje el articulo y costo en el array y agregue el costo total 
    switch (producto) {
        case "botines":
            items.push({ name: "botines", price: botines * cantidad, quantity: cantidad });
            costo += (botines * cantidad)
            break
        case "camisetas":
            items.push({ name: "camisetas", price: camisetas * cantidad, quantity: cantidad });
            costo += (camisetas * cantidad)
            break
        case "espinilleras":
            items.push({ name: "espinilleras", price: espinilleras * cantidad, quantity: cantidad });
            costo += (espinilleras * cantidad)
            break
        case "medias":
            items.push({ name: "medias", price: medias * cantidad, quantity: cantidad });
            costo += (medias * cantidad)
            break
        case "vendaje":
            items.push({ name: "vendaje", price: vendaje * cantidad, quantity: cantidad });
            costo += (vendaje * cantidad)
            break
        case "shorts":
            items.push({ name: "shorts", price: shorts * cantidad, quantity: cantidad });
            costo += (shorts * cantidad)
            break
        case "listo":
            listo = true;
            break;
        default:
            alert("Ese no es un dato valido por favor ingresa el adecuado")
            break
    }
} while (!listo)


printReceipt();



// La funcion aqui es para imprimir el recibo. Imprime cada producto que esta en el array y calcula el IVA y despues lo agrega al costo total.
function printReceipt() {
    items.map(item => console.log(`${item.quantity}x ${item.name} $${item.price}`))
    console.log("Subtotal: $" + costo)
    let tax = costo * TAX_RATE;
    console.log(`Tax: $${tax}`)
    console.log(`Total: $${costo + tax}`)
}
