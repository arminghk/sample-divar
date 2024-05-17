const express = require('express');
const {AuthRoute} = require('./modules/auth/auth.route');
const dotenv = require('dotenv').config();
require('./config/mongoose.config');


async function main() {
    const app = express()

    app.use('/auth',AuthRoute)

    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
}

main()