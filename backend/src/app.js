const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hii from the backend");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
