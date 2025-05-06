// src/managers/ProductManager.js

export default class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const codeExist = this.products.some(p => p.code === code);
        if (codeExist) {
            console.log("Ya existe un producto con ese código.");
            return null;
        }

        const newProduct = {
            id: ++this.lastId, 
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);

        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log("Not found");
            return null;
        }
        return product;
    }
}
