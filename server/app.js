const express = require("express");
const octavRouter = require("./routes/octav-route");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(octavRouter);

app.listen(5000);
