const mongoose = require("mongoose");
const dbOptions = {
  maxPoolSize: 5,
};
const mongooseConnection = mongoose.connect(process.env.DB_URL, dbOptions);
mongooseConnection.then(()=>  console.log("Connection Created...")).catch((err) =>    console.log("DB Connection Failed..", err));
module.exports = mongoose;
