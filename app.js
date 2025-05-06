const productsRouter = require('./routes/products');
const cartsRouter    = require('./routes/carts');

app.use('/api/products', productsRouter);
app.use('/api/carts',    cartsRouter);
