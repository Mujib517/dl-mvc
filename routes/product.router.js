const router = require('express').Router();
const productCtrl = require('../controllers/product.ctrl');

router.get('/', productCtrl.get);

module.exports = router;