class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0; 
    }
        // Validar Code
        const codeExist = this.products.some(p => p.code === code);
        if (codeExist) {
            console.log("Ya existe un producto con ese código.");
            return;
        }
        const newProduct = {
            id: ++this.lastId, // Incrementar
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not found");
            return null;
        }
    }}

