class DefaultCtrl {

  home(req, res) {
    res.render("home");
  }
  
  about(req, res) {
    res.render("about");
  }
  
  contact(req, res) {
    res.render("contact");
  }
}


module.exports = new DefaultCtrl();