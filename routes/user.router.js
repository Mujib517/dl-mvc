const router = require('express').Router();
const userCtrl = require('../controllers/user.ctrl');
const passport = require('passport');

router.get('/register', userCtrl.get); //redirect to register page
router.post('/register', userCtrl.save);
router.get('/login', userCtrl.signin);
router.get('/logout', userCtrl.logout);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/products',
  failureRedirect: '/login'
}));


module.exports = router;