const path = './classProductManager.js'



const newArray = []


class ProductManager{
    constructor(ruta){
        this.ruta = path
        this.product = ArrayProducts
    }
    consultarProducto = async () => {
        try {
            
            if(FileSystem.existsSync(path)){
                const product = await FileSystem.promises.readfile(this.ruta, 'utf-8');
                return JSON.parse(product)

            } 
            return []
            
        } catch (error) {
            return []
        }
        


    }
    addProduct =async () => {
       const product = await this.consultarProducto
       if(product.length==0){
        usuario.id=1;
       }else{
        usuario.id = product [product.lenght-1].id+1;

       }
       product.push(ArrayProducts);
       await FileSystem.promises.writeFile(path,JSON.stringify(ArrayProducts,null,'\t')); 
       return product

    }
    getProduct = async () => {
        try {
            
            if(FileSystem.existsSync(path)){
                const product = await FileSystem.promises.readfile(this.ruta, 'utf-8');
                return JSON.parse(product)

            } 
            product.push(newArray);
       
            
            
        } catch (error) {
            return []
        }
        


    
       
    }
    getProductById = async (id) =>{
        const product = await this.consultarProducto 
        if(this.products.find(prod => prod.id === id)){
            return {product}

        }
        return product
    }
    UpdateProduct = async (id) =>{
        const product = await this.consultarProducto 

        if(this.products.find(prod => prod.id === id)){
           const Newupdate =  products.UpdateProduct.code;
           Newupdate.push(ArrayProducts);
           
            
            

        }
        return product
        
    }

    eliminarProducto = async ()=>{
        const product = await this.consultarProducto 

        if(this.products.find(prod => prod.id === id)){
            await FileSystem.promise.unlinkfyle(this.ruta,'utf-8')
           
            
            

        }

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



