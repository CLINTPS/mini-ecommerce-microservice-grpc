const mongoose = require('mongoose')
require('dotenv').config()

const dburl = process.env.PRODUCT_DB_URL
console.log('product service db url',dburl)

const connectDB = async ()=> {

    mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'Mini-ECOM-Product'
    
})
.then(()=>{
    console.log('product service database connected successfully')
})
.catch((err)=>{
    console.log(`error occured in product-services db ${err}`)
})
}

module.exports = connectDB