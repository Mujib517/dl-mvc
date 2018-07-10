const router = require('express').Router();
const defaultCtrl = require('../controllers/default.ctrl');

router.get('/',defaultCtrl.home);
router.get('/about',defaultCtrl.about);
router.get('/contact',defaultCtrl.contact);

module.exports = router;