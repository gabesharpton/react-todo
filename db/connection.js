const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_name')

mongoose.Promise = Promise;

module.exports = mongoose;