const express = require("express");
const connectDb = require("./config/database");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  console.log("Hii from the backend");
  res.send("Hello World");
});
connectDb();  
module.exports = app;
