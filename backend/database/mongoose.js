const mongoose = require('mongoose');

// This allows us to use Promises, to handle asychronous code.
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager')
        .then(() => console.log("Database Connected"))
        .catch((error) => console.log(error));

module.exports = mongoose;