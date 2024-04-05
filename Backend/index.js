const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const connectdb = require('./Mongodb')
const DataModel = require('./Modal/Modal')

app= express()
app.use(cors())
app.use(bodyParser.json());


app.get(`/api/filterdata/:field`, async(req, res) =>{
    const field = req.params.field
    try{
        const filter_data= await DataModel.distinct(field)
        res.status(200).json(filter_data.slice(0,10))
    }catch(err){
        console.log(err)
        res.send('something went wrong')
    }
 
})

app.get(`/api/filterdata`, async(req, res) =>{
    try{
const countrydata=await DataModel.aggregate([
    {
      $group: {
        _id: "$country",
        // count: { $sum: 1 },
        total: { $sum: "$likelihood" },
        // data: { $first: "$$ROOT" }
      },
   
    }
  ]);

  const regiondata=await DataModel.aggregate([
    {
        $group: {
            _id: "$region",
            total: { $sum: "$intensity" },
          } 
    }
  ]);
  const sectordata=await DataModel.aggregate([
    {
        $group: {
            _id: "$sector",
            total: { $sum: "$relevance" },
          } 
    }
  ]);
   res.status(200).json({country:countrydata.slice(0,10),region:regiondata.slice(0,10),
    sector:sectordata.slice(0,10)})
    }catch(err){
        console.log(err,"---------------")
        res.send('something went wrong')
    }
})


app.get(`/api/filterdata/:field/:field_name`, async(req, res) =>{
    const fields={
            "field":req.params.field,
            "field_name":req.params.field_name
        }
    
    console.log(fields.field,fields.field_name)
    try{
        const filter_data= await DataModel.find({[fields.field]:[fields.field_name]})
        res.status(200).json(filter_data[1])
    }catch(err){
        console.log(err)
        res.send('something went wrong')
    }
})

connectdb().then(()=>{
    app.listen(8000,()=>{
        console.log('server is running')
    })
})
