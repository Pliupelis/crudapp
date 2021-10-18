const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected ${con.connection.host}`);
    }catch(err){
console.error(err)
process.exit(1)//true
    }

    }
module.exports = connectDB