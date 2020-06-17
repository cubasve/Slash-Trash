const express = require("express");
const router = express.Router();
const alternativesCtrl = require("../controllers/alternatives");

// const alternative = require('../models/alternative');

//search for alternatives:
router.get("/", alternativesCtrl.index);
// router.get("/search", alternativesCtrl.search); //route is /alternatives/search
//get info back from seed and send it to browser

// router.post('/', alternativeCtrl.create);
module.exports = router;

//Want to add, update and delete an alternative
// router.get('/alternatives', alternativesCtrl.index);
// router.post('/alternatives', alternativesCtrl.addSwap);
// router.delete('/alternatives/:id', alternativesCtrl.deleteSwap);
// router.put('/alternatives/:id', alternativesCtrl.updateSwap);

//NOTE: already mounted to /alternatives:
// --> / for /alternatives --> search for alternatives? --> retrieve data
// --> STEP 1:  /alternatives/new --> add a new alternatives
// --> STEP 2:  /alternatives/new --> create new alternatives
