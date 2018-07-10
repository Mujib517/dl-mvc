const express = require('express');
const hbs = require('express-hbs');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is running on", PORT));

app.use(express.static("public"));

app.set('view engine', 'hbs');
app.engine('hbs', hbs.express4({
  defaultLayout: __dirname + "/views/index.hbs",
  partialsDir: __dirname + "/views/partials"
}));


const defaultRouter = require('./routes/default.router');
const productRouter = require('./routes/product.router');

app.use('/', defaultRouter);
app.use('/products', productRouter);