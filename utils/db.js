const mongoose = require("mongoose");

// mongoose.connect(URI);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection Successfull to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};
module.exports = connectDB;
