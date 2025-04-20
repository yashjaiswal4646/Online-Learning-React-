const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Hardcoded admin credentials
  const adminEmail = "codehub123@gmail.com";
  const adminPassword = "123456789";

  if (email === adminEmail && password === adminPassword) {
    return res.status(200).json({ message: "Login successful", token: "admin-token" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

module.exports = router;