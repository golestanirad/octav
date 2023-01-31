const express = require("express");
const octavData = require("../octav-data.json");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(octavData);
});

module.exports = router;
