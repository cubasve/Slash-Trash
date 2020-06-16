const express = require('express');
const router = express.Router();
//require in function from controllers folder

// /* GET users listing. */ --> originally users.js - converted to items.js
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//I want to search for an item and get an alternative
// router.get('/items', itemsCtrl.index); //GET - searching for items, but get an alternative back in return

module.exports = router;
//NOTE: already mounted to /items:
// --> / for /items
// --> /category --> when a user clicks on the dollhouse
// --> /all --> when user clicks on 'all' button --> displays all swaps
// --> PUT /:id --> update swap
// --> DELETE /:id --> delete swap