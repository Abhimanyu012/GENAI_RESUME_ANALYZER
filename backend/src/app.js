const express = require("express");
const app = express();
app.use(express.json());

//all routes are defined here
const authRouter = require("./routes/auth.routes.js");
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  console.log("App.js is working");
  res.send("Hello World");
});

module.exports = app;
