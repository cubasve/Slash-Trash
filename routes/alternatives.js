const express = require('express');
const router = express.Router();
//require function from controllers folder

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Slash Trash' });
// });

//Want to add, update and delete an alternative
router.get('/alternatives', alternativesCtrl.index);
router.post('/alternatives', alternativesCtrl.addSwap);
router.delete('/alternatives/:id', alternativesCtrl.deleteSwap);
router.put('/alternatives/:id', alternativesCtrl.updateSwap);

module.exports = router;


/*
Can an alternative be used for many household items? YES --> M:M relationship
- only adding 1 to the M:M side of things

How are you keeping track of your swaps?
- seeds database with a bunch of household items
- 




*/