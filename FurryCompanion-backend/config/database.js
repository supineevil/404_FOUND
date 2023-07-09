const mongoose = require("mongoose");

//Database
const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `Database connection is ready with server ${data.connection.host}`
      );
    });
};

module.exports = connectDatabase;
