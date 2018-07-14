const express = require('express');
const hbs = require('express-hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const configureAuth = require('./utilities/auth');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is running on", PORT));

mongoose.connect("mongodb://admin:admin123@ds159344.mlab.com:59344/dl-products");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set('view engine', 'jade'); //pug
app.set('views', __dirname + "/my-views");


// app.set('view engine', 'hbs');
// app.engine('hbs', hbs.express4({
//   defaultLayout: __dirname + "/views/index.hbs",
//   partialsDir: __dirname + "/views/partials"
// }));

configureAuth(app);

const defaultRouter = require('./routes/default.router');
const productRouter = require('./routes/product.router');
const userRouter = require('./routes/user.router');
const middlewares = require('./utilities/middlewares');

app.use('/', defaultRouter);
app.use('/users', userRouter);

// app.use(middlewares.isAuthenticated);
// app.use(middlewares.noCache);

//private route
app.use('/products', productRouter);