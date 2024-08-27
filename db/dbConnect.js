// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        'mongodb+srv://jovannickonana_22:B5b5334curk@cluster0.inmi0cm.mongodb.net/authdb?retryWrites=true&w=majority&appName=Cluster0',
      {
        //   these are options to ensure that the connection is done properly
        
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;