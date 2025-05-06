import express from 'express';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

app.use(errorHandler);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});
