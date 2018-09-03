const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Internships', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB connected');
});

module.exports = mongoose;
