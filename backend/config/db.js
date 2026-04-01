const mongose = require("mongoose");

const connectdb = async ()=>{
    try {
        await mongose.connect (process.env.MONGO_URI);
        console.log("Connection successuful to DB");
    } catch (error) {
        console.error(error||"connection faild to DB");
        process.exit(0);
    }
}

module.exports = connectdb;