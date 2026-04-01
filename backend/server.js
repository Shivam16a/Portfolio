const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const connectdb = require("./config/db.js");





const PORT = process.env.PORT || 5500;

connectdb().then(() => {
    app.listen(PORT,()=>{
        console.log(`Server is running on port:${PORT}`);
    })
})
