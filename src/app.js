const express = require("express");

const app = express();

app.use(express.json());

// health route
app.get("/health", (req, res) => {
  res.send("Server running");
});

// routes
const uploadRoutes = require("./routes/uploadRoutes");
app.use("/api", uploadRoutes);
module.exports = app;