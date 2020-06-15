const Item = require('../models/item');

module.exports = {
    seed,
}

function seed(req, res, next) {
    Item.insertMany()
}