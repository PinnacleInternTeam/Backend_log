const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const userSchema =new Schema({
   //username:{type :String, required : true},
},
);

const User =mongoose.model('InsUser',userSchema);

module.exports = User;