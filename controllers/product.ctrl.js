class ProductCtrl {

  get(req, res) {
    const products = [{ id: 1, brand: "NOkia", model: "X6", price: 200 },
    { id: 3, brand: "NOkia", model: "X7", price: 200 },
    { id: 3, brand: "NOkia", model: "X6", price: 300 }];

    res.render("products", { products: products });
  }

}

module.exports = new ProductCtrl()