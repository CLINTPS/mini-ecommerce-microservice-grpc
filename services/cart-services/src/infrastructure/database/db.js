const mongoose =  require('mongoose')
require('dotenv').config()


const dbUrl = process.env.CART_MONGODB_URL;

const CONNECTDB = async ()=>{
    
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        dbName:'Mini-ECOM-Cart'
    })
    .then(()=>{
        console.log('Mini-ECOM-Cart connected')
    })
    .catch((err)=>{
        console.log('cart service db failed with error',err)
    })
}

module.exports  = CONNECTDB