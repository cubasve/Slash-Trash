const express = require('express');
const router = express.Router();
const itemCtrl = require('../controllers/items'); //require in functions from controllers

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slash Trash' });
});

router.post('/items', itemCtrl.seed); //not sure about path
router.get('/success', itemCtrl.seedSuccess);

module.exports = router;
