let mongoose = require('mongoose');

let userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enmu:["HR","EMPLOYEE"]
        
    }

})
let users = mongoose.model('users',userSchema);
module.exports={users};