let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ClassSchema = new mongoose.Schema({
    _id:Number,
    pname:String,
    desc:String,
    price:Number
})

let ClassModel = mongoose.model("",ClassSchema,"Class");

module.exports = ClassModel