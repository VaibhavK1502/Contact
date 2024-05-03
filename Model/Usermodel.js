const { model } = require('mongoose');
const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type: String
    },
    contact:{
        type: String
    }
})
module.exports = mongoose.model('userdata',userschema)
