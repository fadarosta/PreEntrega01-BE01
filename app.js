import express from 'express';
import productRouter from './src/routers/products.router.js';
import cartRouter from './src/routers/carts.router.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

const products = [
    {
        title: "Esterilla de Yoga Eco-Friendly",
        description: "Esterilla antideslizante de 6 mm de grosor fabricada con materiales reciclados.",
        price: 45000,
        thumbnail: "https://example.com/images/esterilla-eco.jpg",
        code: "YM-ECO-001",
        stock: 25
    },
    {
        title: "Bloque de Yoga de Corcho",
        description: "Bloque resistente de corcho natural para mejorar el soporte en posturas avanzadas.",
        price: 8000,
        thumbnail: "https://example.com/images/bloque-cork.jpg",
        code: "YB-CORK-002",
        stock: 40
    },
    {
        title: "Cinta de Yoga Ajustable",
        description: "Cinta de algodón con hebilla metálica para facilitar estiramientos y mejorar la flexibilidad.",
        price: 12000,
        thumbnail: "https://example.com/images/cinta-ajustable.jpg",
        code: "YS-STRAP-003",
        stock: 60
    }
];

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use(errorHandler);

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});
