const Product = require('../model/product.model');

class ProductCtrl {

  get(req, res) {
    Product.find()
      .sort('-lastUpdated')
      .limit(10)
      .exec()
      .then(products =>{
        res.locals.products=products;
        res.render("products")
      })
      .catch(err => console.log(err));
  }

  getById(req, res) {
    const id = req.params.id;

    Product.findById(id)
      .exec()
      .then(product => res.render("product-detail", { product: product }))
      .catch(err => console.log(err));
  }

  newProduct(req, res) {
    res.render("new-product");
  }

  save(req, res) {
    req.body.inStock = !!req.body.inStock;

    const product = new Product(req.body);
    product.save()
      .then(savedProduct => res.redirect("/products"))
      .catch(e => console.log(e));
  }

  delete(req, res) {
    const id = req.params.id;

    Product.findByIdAndRemove(id)
    .exec()
    .then(()=>res.redirect("/products"))
    .catch(e => console.log(e));
  }
}

module.exports = new ProductCtrl()