// constructor
class ProductManager {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }
// addProduct
    addProduct(title, description, price, thumbnail, code, stock){
        const newProduct = {
            id: this.currentId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        this.currentId++;
        }
// getProducts
    getProducts(){
        return this.products;
    }
// getProductsById
    getProductsById(){
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not found");
        }
    }
}

const manager = new ProductManager();

manager.addProduct("Yoga", "Yoga Integral", 1200, "imagen.jpg", "A001", 50);

console.log(manager.getProducts());
