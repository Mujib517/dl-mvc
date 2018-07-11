const router = require('express').Router();
const productCtrl = require('../controllers/product.ctrl');

router.get('/', productCtrl.get);
router.post('/', productCtrl.save);
router.get('/new', productCtrl.newProduct);
router.get('/:id', productCtrl.getById);
router.post('/delete/:id', productCtrl.delete);

module.exports = router;