const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const userCtrl = require('../controllers/user.ctrl');

function configure(app) {
  app.use(session({ secret: 'secret', saveUninitialized: false, resave: false }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy('local', userCtrl.login));


  // passport.use(new LocalStrategy('local', function (username, password, done) {
  //   if (username === 'admin' && password === 'admin') done(null, { username: username });
  //   else done("Wrong username or password");
  // }));

  passport.serializeUser(function (user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function (username, done) {
    done(null, username);
  });

}

module.exports = configure;