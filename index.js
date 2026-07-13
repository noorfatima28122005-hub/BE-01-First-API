const express = require("express");

const app = express();
const PORT = 3000;

// First JSON endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my first Backend API!",
    name: "Noor Fatima"
  });
});

// Second JSON endpoint
app.get("/about", (req, res) => {
  res.json({
    track: "Backend AI Engineering",
    assignment: "BE-01",
    status: "Completed"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});