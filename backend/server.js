const dotenv = require("dotenv");

dotenv.config();

const server = require("./src/app.js");
const connectDb = require("./src/config/database.js");

const PORT = process.env.PORT || 3000;

connectDb();
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
