let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
name: {
    type:String,
    requiered:true
},
description: String
},{
    versionKey:false
});

module.exports = moongoose.model('Place', PlaceSchema);
