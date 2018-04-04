var mongoose = require('mongoose');

var schema = mongoose.schema({
    Description: String,
    Date: String,
    Author: String
});
module.exports = mongoose.model('schema', schema);