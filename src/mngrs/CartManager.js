
import fs from 'fs/promises';

export default class CartManager {
    constructor(path) {
        this.path = path;
    }

    async #readFile() {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } catch {
            return [];
        }
    }

    async #writeFile(data) {
        await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    }

    async createCart() {
        const carts = await this.#readFile();
        const newCart = { id: Date.now().toString(), products: [] };
        carts.push(newCart);
        await this.#writeFile(carts);
        return newCart;
    }

    async getCartById(cid) {
        const carts = await this.#readFile();
        return carts.find(c => c.id === cid);
    }

    async addProductToCart(cid, pid) {
        const carts = await this.#readFile();
        const cart = carts.find(c => c.id === cid);
        if (!cart) return null;

        const item = cart.products.find(p => p.product === pid);
        if (item) item.quantity++;
        else cart.products.push({ product: pid, quantity: 1 });

        await this.#writeFile(carts);
        return cart;
    }
}