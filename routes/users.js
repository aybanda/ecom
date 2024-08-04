const express = require("express");
const user = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const userList = await user.find();
  if (!userList) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(userList);
});

router.post("/", async (req, res) => {
  const user = new User({});
});

module.exports = router;
