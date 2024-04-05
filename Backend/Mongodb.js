const mongoose = require('mongoose')
 const mongoURL ="mongodb://localhost:27017/dumy";
 const connectdb= async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("db connect")
    }catch(err){
        console.log("err",err)
    }
 }
 module.exports = connectdb