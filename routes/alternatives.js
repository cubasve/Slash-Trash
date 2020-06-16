const express = require('express');
const router = express.Router();
const alternativesCtrl = require('../controllers/alternatives');

// const alternative = require('../models/alternative');
//require function from controllers folder

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Slash Trash' });
// });
//this is why /alternatives was showing my main page



//search for alternatives:
router.get('/', alternativesCtrl.index);
// router.post('/', alternativeCtrl.create);





//Want to add, update and delete an alternative
// router.get('/alternatives', alternativesCtrl.index);
// router.post('/alternatives', alternativesCtrl.addSwap);
// router.delete('/alternatives/:id', alternativesCtrl.deleteSwap);
// router.put('/alternatives/:id', alternativesCtrl.updateSwap);

module.exports = router;
//NOTE: already mounted to /alternatives:
// --> / for /alternatives --> search for alternatives? --> retrieve data
// --> STEP 1:  /alternatives/new --> add a new alternatives
// --> STEP 2:  /alternatives/new --> create new alternatives


