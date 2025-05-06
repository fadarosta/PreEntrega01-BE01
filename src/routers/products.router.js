// src/routers/products.router.js

import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

// validaciones para POST
import { validateProduct } from '../validators/productValidator.js';
import { validateFields } from '../middlewares/validateFields.js';

const productsRouter = Router();
const pm = new ProductManager('./src/data/products.json');

// GET /api/products/
productsRouter.get('/', async (req, res) => {
    const products = await pm.getProducts();
    res.json(products);
});

// GET /api/products/:pid
productsRouter.get('/:pid', async (req, res) => {
    const product = await pm.getProductById(req.params.pid);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
});

// POST /api/products/
productsRouter.post(
    '/',
    validateProduct,
    validateFields,
    async (req, res) => {
        const newProduct = req.body;
        const result = await pm.addProduct(newProduct);
        res.status(201).json(result);
    }
);

// PUT /api/products/:pid
productsRouter.put('/:pid', async (req, res) => {
    const updates = req.body;
    const updated = await pm.updateProduct(req.params.pid, updates);
    if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(updated);
});

// DELETE /api/products/:pid
productsRouter.delete('/:pid', async (req, res) => {
    const deleted = await pm.deleteProduct(req.params.pid);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
});

export default productsRouter;
