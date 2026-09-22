const { Router } = require("express");
const { signup } = require("../controllers/auth.controller");
const authRouter = Router();
authRouter.get("/health", (req, res) => {
  res.send("OK!");
});

authRouter.post("/signup", signup);
module.exports = authRouter;
