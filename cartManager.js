const FileSystem = require("fs")
const ProductManager = require("./productManager.js")
const cartprod = new ProductManager ("./products.json")

class CartManager {
  constructor(ruta) {
    this.ruta = ruta;
  }
  addCarrito = async () => {
    const trajeCarritos = await this.getCarritos();
    const cart = { product: [] };
    console.log("soy carrito", trajeCarritos);
    if (trajeCarritos.length == 0) {
      cart.id = 1;
    } else {
      let longitud = trajeCarritos.length - 1;
      cart.id = trajeCarritos[longitud].id + 1;
    }
    trajeCarritos.push(cart);
    await FileSystem.promises.writeFile(
      this.ruta,
      JSON.stringify(trajeCarritos, null, "\t")
    );
    return cart;
  };

  getCarritos = async () => {
    const fileExist = await FileSystem.existsSync(this.ruta, "utf-8");

    if (fileExist) {
      const leerCarrito = await FileSystem.promises.readFile(
        this.ruta,
        "utf-8"
      );
      let cartsParsed = JSON.parse(leerCarrito);
      return cartsParsed;
    } else {
      console.log("no existe compa");
    }
  };
  getCarritosbyid = async (id) => {
    const buscaid = await this.getCarritos()
    const idfounded =await buscaid.find((cartid) => cartid.id == id);
    
    if(idfounded){return idfounded}
    else{console.error("not founded")}
    
  };
  addprodtocart = async (cid, pid)=>{
    let getcarts = await this.getCarritos()
    let productfounded = await cartprod.getProductById(pid)
    
      const  findthecart = await getcarts.find (cart => cart.id ==cid)
        let newobject = {
            productid: productfounded.id};

        findthecart.product.push(newobject)
        await FileSystem.promises.writeFile(
            this.ruta,
            JSON.stringify(getcarts, null, "\t")
          );
          return getcarts

  }
}
module.exports = CartManager;