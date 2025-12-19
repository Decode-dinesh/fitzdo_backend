const mongoose = require("mongoose");

const connectDb = async (url) => {
  await mongoose
    .connect(url)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(`error: ${err}`));
};


module.exports = connectDb;