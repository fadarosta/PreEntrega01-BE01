
import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';
import { validateProduct } from '../validators/productValidator.js';
import { validateFields } from '../middlewares/validateFields.js';

const productsRouter = Router();
const pm = new ProductManager('./src/data/products.json');

// GET /api/products/
productsRouter.get('/', (req, res) => {
    const products = pm.getProducts();
    res.json(products);
});

// GET /api/products/:pid
productsRouter.get('/:pid', (req, res) => {
    const pid = Number(req.params.pid);
    const product = pm.getProductById(pid);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
});

// POST /api/products/
productsRouter.post(
    '/',
    validateProduct,
    validateFields,
    (req, res) => {
        const { title, description, price, thumbnail, code, stock } = req.body;
        const newProduct = pm.addProduct(title, description, price, thumbnail, code, stock);
        res.status(201).json(newProduct);
    }
);

// PUT /api/products/:pid
productsRouter.put('/:pid', (req, res) => {
    const pid = Number(req.params.pid);
    const updates = req.body;
    const updated = pm.updateProduct(pid, updates);
    if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(updated);
});

// DELETE /api/products/:pid
productsRouter.delete('/:pid', (req, res) => {
    const pid = Number(req.params.pid);
    const deleted = pm.deleteProduct(pid);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
});

export default productsRouter;
