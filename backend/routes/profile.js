const express = require("express");
const router = express.Router();
const authenticationToken = require("../middleware/jwtMiddleware");

router.get("/", authenticationToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
