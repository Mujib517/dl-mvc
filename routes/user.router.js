const router = require('express').Router();
const userCtrl = require('../controllers/user.ctrl');

router.get('/register', userCtrl.get); //redirect to register page
router.post('/register', userCtrl.save); 
router.get('/login', userCtrl.signin); 
router.post('/login', userCtrl.login); 

module.exports = router;