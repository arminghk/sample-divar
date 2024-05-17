const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log('database connected :)');
}).catch(err=>{
    console.log(err?.message??'unable to connect database');
})