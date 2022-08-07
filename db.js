const mongoose = require('mongoose')

// const url = 'mongodb://localhost:27017/test';
// const url = Your MongoDB URL;
const url = ``;

const connectToMongo =()=>{
    mongoose.connect(url, ()=>{
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;
