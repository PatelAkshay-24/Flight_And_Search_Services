const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");
const city = require("./models/index");
const sequelize = require("sequelize");
//port
const { PORT, DB_SYNC } = require("./config/serverconfig");

const PrepareandStartServer = async () => {

  //Api
  app.use("/api", ApiRoutes);

  //listen port
  app.listen(PORT, async () => {
    console.log(`sever is start on http://localhost:${PORT}`);
    if (DB_SYNC) {
      db.sequelize.sync({ alert: true });
    }
  });
};

PrepareandStartServer();
