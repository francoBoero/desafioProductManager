ArrayProducts = [{
    id:1, 
    title:'PC',
    description:'Alta PC',
    price:500000,
    thumbnail:'https://hitek.fr/actualite/ordinateur-quantique-cent-millions-fois-plus-rapide_7836',
    code:'0001',
    stock:20,

    


}];


class ProductManager{
    constructor(){
        this.products = ArrayProducts
    }
    addProduct(newProduct){
        
        const product = this.products.find(prod => prod.code == newProduct.code)
        if(product){
            return 'si existe el producto con este codigo'
        }

        this.products.push( {id: this.products.lenght + 1, ...newProduct  } )


        
    

    }
    getProduct (){
        return this.products
    }
    getProductById(id){
        const product = this.products.find(prod => prod.id === id)
        if(!product){
            return 'not found'

        }
        return product
    }

};

module.exports ={
ProductManager
};


const productos = new ProductManager()

productos.addProduct({
    id:2,
    title:'teclado',
    description:'Alto keyboard',
    price:25000,
    thumbnail:'https://es.vecteezy.com/foto/12348201-teclado-muy-sucio-pelo-de-perro-migas-de-pan-y-polvo-acumulado-debajo-de-las-teclas-interruptores-de-teclado-mecanico-sin-botones',
    code:'0002',
    stock:70,

})


console.log(productos.getProduct())
console.log(productos.getProductById(2))



