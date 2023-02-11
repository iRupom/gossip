const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected : ${con.connection.host}`.inverse.white);
  } catch (error) {
    console.log(`Error : ${error.message}`.red);
  }
};

module.exports = connectDB;
