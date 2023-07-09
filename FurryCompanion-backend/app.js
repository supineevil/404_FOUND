const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//config
require("dotenv").config({ path: "./config/config.env" });
console.log(`${process.env.API_URL}`);

// app.get(`/api/v1/test`, (req, res) => {
//   res.send("Server working fine");
// });
//Route imports
const user = require("./routes/userRoute");
const test = require("./routes/testRoute");

//Routes
app.use(`${process.env.API_URL}/user`, user);
app.use(`${process.env.API_URL}/test`, test);

//Middleware for error
app.use(errorMiddleware);
module.exports = app;
