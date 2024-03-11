const express = require("express");
const { connectDB } = require('./utils/index')

const PORT = 8080;
const app = express();

const startServer = async () => {
  try {
    // 初始化数据库
    await connectDB();
    app.listen(PORT, () => console.log(`🚗 Server running on port ${PORT} 🌟`));
  } catch (error) {
    console.error("*** start server ERROR ***:", error);
  }
};

startServer();