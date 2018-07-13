module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.locals.isLoggedin = true;
      next();
    }
    else res.redirect('/users/login');
  },

  noCache: (req, res, next) => {
    res.header('Cache-Control', 'no-cache, must-revalidate, no-store');
    next();
  }
};