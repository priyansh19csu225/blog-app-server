const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded());
const { ROOT } = require("./utils/config").ROUTES;
app.use(cors());
app.use(ROOT, require("./api/routes/blog"));

const server = app.listen(process.env.PORT || 9000, (err) => {
  if (err) {
    console.log("App Crash ", err);
  } else {
    console.log("Server Started... ", server.address().port);
  }
});
