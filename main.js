class ProductManager{
    constructor(){
        this.products = []
    }

    static id = 0


    addProduct(title, description, price, image, code, stock){
        for (let i = 0; i<this.products.length; i++){
            if( this.products[i].code === code){
                console.log(`El codigo ${code} esta ya en lista`);
                break;
            }
        }
        ProductManager.id++
        this.products.push({
            title, 
            description, 
            price, 
            image, 
            code, 
            stock, 
            id:ProductManager.id,
        })

    }
    getProduct(){
        return this.products;
    }

    exist(id){
        return this.products.find((producto)=>producto.id === id)
    }

    getProductById(id){
        if(!this.exist(id)){
        console.log("Not found")
    } else{
        console.log(this.exist(id));
    }
    }

}

const productos = new ProductManager

console.log(productos.getProduct());

productos.addProduct('Producto prueba', 'Este es un producto prueba', 250, 'Sin imagen', "abc123", 25);
//productos.addProduct('Producto prueba2', 'Este es un producto prueba2', 50, 'Sin imagen2', "abc123", 30);

console.log(productos.getProduct())

productos.addProduct('Producto prueba2', 'Este es un producto prueba2', 50, 'Sin imagen2', "abc123", 30);


productos.getProductById(2)
