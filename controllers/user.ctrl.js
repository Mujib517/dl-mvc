const User = require('../model/user.model');

class UserCtrl {

  get(req, res) {
    res.render("register");
  }

  save(req, res) {
    //hashing
    const user = new User(req.body);
    user.save()
      .then(u => res.render("register", { success: true }))
      .catch(e => res.render("error"));
  }

  signin(req, res) {
    res.render("login");
  }

  login(req, res) {

    User.findOne({ username: req.body.username, password: req.body.password })
      .exec()
      .then(result => {
        if (result) res.redirect("/products");
        else {
          res.redirect("login",{ failed: true });
        }
      })
      .catch(e => res.render("error"));
  }
}

module.exports = new UserCtrl()