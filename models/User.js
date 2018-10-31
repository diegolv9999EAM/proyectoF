let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
username: {
    type:String,
    requiered:true
},
email:{ 
    type:String,
    unique:true
},
password: {
    type:String,
    requiered:true
    }
},{
    versionKey:false
});

module.exports = moongoose.model('User', PlaceSchema);