const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.get("/ready", (req, res) => {
  // res.status(200).json({
  //   status: "ready",
  // });

    // TEMPORARY: intentionally broken to capture rollback evidence
    res.status(500).json({ status: "intentionally broken" });
});

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Test User",
    email: "test@example.com",
    github: "https://github.com/example",
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

module.exports = app;


