const FileSystem = require("fs");

const newArray = [];

class ProductManager {
  constructor(ruta) {
    this.ruta = ruta;
    this.product = newArray;
  }
  //Hacer funciones validadores para validar que no se repita el codigo Y Usarla en addProduct
  /*validateCode = async (code) =>{
        const findthecode = await this.getProduct(code)
       const thefinalcode = findthecode.find(prodcode=>prodcode.code==code)
        if(thefinalcode==code){
            console.log("este pod ya esxite")
            return true



        }
        

    }*/

  //Utilizar el metodo GetProduct para simplicar codigo en otros metodos.

  addProduct = async (productoarecibir) => {
    let allProducts = await FileSystem.promises.readFile(this.ruta, "utf-8"); //buscamos archivos de la lista de productos en productos.json
    let allProductsParse = JSON.parse(allProducts); //Parseamos los productos que vienes en formato.json
    this.product = allProductsParse;
    //  let validate = await this.validateCode()
    //rellenamos el constructor product con los objeto.
    if (this.product[0] == null) {
      this.product = [];
      this.product.push(productoarecibir);
      this.product[0].id = 1;
      await FileSystem.promises.writeFile(
        this.ruta,
        JSON.stringify(this.product, null, "\t")
      );
      console.log("se añadio el producto correctamente");
    } 
    
    else {
      if (!this.product.length) {
        productoarecibir.id = 1;
      } 
      
      
      else {
        console.log("soy el .length -1 ", this.product.length - 1);
        let longitud = this.product.length - 1;
        productoarecibir.id = this.product[longitud].id + 1;
      }

      this.product.push(productoarecibir);
      await FileSystem.promises.writeFile(
        this.ruta,
        JSON.stringify(this.product, null, "\t")
      );
      console.log("se añadio el producto correctamente");
    }
  };

  getProduct = async () => {
    const fileExist = await FileSystem.existsSync(this.ruta, "utf-8");
    if (fileExist) {
      let product = await FileSystem.promises.readFile(this.ruta, "utf-8");

      return JSON.parse(product);
    } else {
      console.error("No existe ningun producto agregado");
    }
    return [];
  };
  getProductById = async (id) => {
    let allProducts = await FileSystem.promises.readFile(this.ruta, "utf-8");
    this.product = JSON.parse(allProducts);
    const findProduct = this.product.find((obj) => obj.id == id);
    if (findProduct) {
      return findProduct;
    } else {
      console.error("No se pudo encontrar el producto con el id " + id);
    }
  };

  UpdateProduct = async (id, parametrosModificar) => {
    let allProducts = await FileSystem.promises.readFile(this.ruta, "utf-8");
    let allProductsParsed = JSON.parse(allProducts);

    let findindex = allProductsParsed.findIndex((prod) => (prod.id = id)); // Buscamos la posicion del producto con el id especificado

    allProductsParsed[findindex] = parametrosModificar; //accedemos a la posicon encontrada en el array de productos y sobreescribimos sus propiedades (buscar una forma de que no pierda su id)

    await FileSystem.promises.writeFile(
      this.ruta,
      JSON.stringify(allProductsParsed, null, "\t")
    ); //Sobreescrimos toda la carpeta productos.json con los cambios
  };

  eliminarProducto = async (id) => {
    let allProducts = await FileSystem.promises.readFile(this.ruta, "utf-8");
    let allProductsParsed = JSON.parse(allProducts);

    let allProductsFilteres = allProductsParsed.filter(
      (prod) => prod.id !== id
    );

    await FileSystem.promises.writeFile(
      this.ruta,
      JSON.stringify(allProductsFilteres, null, "\t")
    );
  };
}

module.exports = ProductManager;

/* const productos = new ProductManager("./src/products.json");

const teclado = {
  title: "teclado",
  description: "Alto keyboard",
  price: 25000,
  thumbnail:
    "https://es.vecteezy.com/foto/12348201-teclado-muy-sucio-pelo-de-perro-migas-de-pan-y-polvo-acumulado-debajo-de-las-teclas-interruptores-de-teclado-mecanico-sin-botones",
  code: "0002",
  stock: 70,
};
const teclado2 = {
  title: "teclado234",
  description: "Alto keyboard2sda",
  price: 2500,
  thumbnail:
    "https://es.vecteezy.com/foto/12348201-teclado-muy-sucio-pelo-de-perro-migas-de-pan-y-polvo-acumulado-debajo-de-las-teclas-interruptores-de-teclado-mecanico-sin-botones",
  code: "002",
  stock: 7,
};

const teclado3 = {
  title: "ya soy nuevo",
  description: "Alto keybd2sda",
  price: 500,
  thumbnail:
    "https://es.vecteezy.com/foto/12348201-teclado-muy-sucio-pelo-de-perro-migas-de-pan-y-polvo-acumulado-debajo-de-las-teclas-interruptores-de-teclado-mecanico-sin-botones",
  code: "028598",
  stock: 7,
};

productos.addProduct(teclado3);
//productos.addProduct(teclado)
//productos.addProduct(teclado2)
//productos.addProduct(teclado3)
//productos.getProduct()
let modificaciones = {
  title: "alfajor",
  description: "fdfdaf",
};
//console.log(productos.getProduct())
//console.log(productos.getProductById(6))

//productos.eliminarProducto(2)
 */