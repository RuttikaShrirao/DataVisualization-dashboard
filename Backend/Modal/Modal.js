const mongoose  = require("mongoose");
const dataSchema= new mongoose.Schema({
    
end_year:{
    type:String
},
intensity:{
    type:Number
},
sector:{
    type:String
},
topic:{
    type:String
},
insight:{
    type:String
},
url:{
    type:String
},
region:{
    type:String
},
start_year:{
    type:String
},
impact:{
    type:String
},
added:{
    type:String
},
published:{
    type:String
},
country:{
    type:String
},
relevance:{
    type:Number
},
pestle:{
    type:String
},
source:{
    type:String
},
title:{
    type:String
},
likelihood:{
    type:Number
}
});

const DataModel = mongoose.model('dashboard',dataSchema, 'dashboard')

module.exports = DataModel
