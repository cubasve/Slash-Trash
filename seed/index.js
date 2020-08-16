const mongoose = require('mongoose');
const Item = require('../models/item');
const Alternative = require('../models/alternative');
const items = require('./items');
const alternatives = require('./alternatives');

// uncomment if you want to get database url from .env file
// ----------------------
require('dotenv').config()
const databaseURL = process.env.DATABASE_URL

// use this if you just want to hardcode database url
// make sure you don't accidently add your production DB URL here and commit it!!
// comment this out if you use the .env setup
//const databaseURL = 'mongodb://localhost/slashtrashdb';

// connect to db
mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

// make queries to seed data
async function seedData() {
  // clear out items and alternatives
  try {
    await Promise.all([Item.deleteMany({}), Alternative.deleteMany({})]);
    console.log('DB Cleared');
  } catch (err) {
    console.error('Error clearing DB');
    console.error(err);
  }

  let altDocs;

  // create alternatives
  try {
    altDocs = await Alternative.create(alternatives);
    console.log('Alternatives created');
  } catch (err) {
    console.error('Error making alternatives');
    console.error(err);
    return;
  }

  // loop through the alternative docs and map swap to doc _id
  // creates an object where the swap is the key, and the _id is the value (used later)
  const swapToIdDict = altDocs.reduce((dict, altDoc) => {
    dict[altDoc.swap] = altDoc._id;
    return dict;
  }, {});

  // replaces alternative "swap" with proper doc _id
  items.forEach((item) => {
    item.alternatives = item.alternatives.map((swap) => swapToIdDict[swap]);
  });

  try {
    await Item.create(items);
    console.log('Items created');
  } catch (err) {
    console.error('Error making items');
    console.error(err);
    return;
  }

  process.exit();
}

seedData().catch((err) => {
  console.error(err);
  process.exit(1);
});
