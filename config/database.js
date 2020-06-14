const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itemsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // shortcut to mongoose.connection object

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
