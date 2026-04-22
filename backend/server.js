const express = require("express");
const server = express();
const cors = require("cors");

// PORT
const PORT = process.env.PORT || 5000;

// Routes
const authRouter = require("./routes/auth");
const feedBackRouter = require("./routes/feedback");
const profileRouter = require("./routes/profile");
const accountRouter = require("./routes/account");
const voteRouter = require("./routes/vote");
const commentRouter = require("./routes/comment");
const analyticsRouter = require("./routes/analytics");

// MongoDB connection
require("dotenv").config();
const connectMongoDB = require("./config/db");
connectMongoDB();

// Cors
server.use(cors());

// Json parser middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Router mount
server.use("/api/auth", authRouter);
server.use("/api/feedback", feedBackRouter);
server.use("/api/profile", profileRouter);
server.use("/api/password", accountRouter);
server.use("/api/vote", voteRouter);
server.use("/api/comments", commentRouter);
server.use("/api/analytics", analyticsRouter);

server.listen(PORT, (req, res) => {
  console.log(`Server is running http://localhost:${PORT}`);
});
