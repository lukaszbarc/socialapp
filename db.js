var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social', function () {
    console.log("Database connected");
});

module.exports = mongoose;