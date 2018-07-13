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

  login(username, password, done) {

    User.findOne({ username: username, password: password }, { _id: 0, password: 0, __v: 0 }, function (err, user) {
      if (!err) done(null, user);
      else done("Wrong username or password");
    });
  }

  logout(req, res) {
    req.logout();
    res.redirect("/users/login");
  }
}

module.exports = new UserCtrl()