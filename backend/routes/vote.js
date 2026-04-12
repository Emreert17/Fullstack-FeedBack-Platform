const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController");
const authMiddleware = require("../middleware/jwtMiddleware");

router.post("/", authMiddleware, voteController.voteControl);

module.exports = router;
