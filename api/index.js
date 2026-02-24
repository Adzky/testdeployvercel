const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.get("/test", (req, res) => {
  res.json({ status: "API working" });
});

module.exports = serverless(app);