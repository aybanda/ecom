const express = require("express");
const router = express.Router();
const order = require("../models/order");

router.get("/", async (req, res) => {
  const orderList = await order.find();
  if (!orderList) {
    res.status(500).json({
      success: false,
    });
    res.status(200).send(orderList);
  }
  res.send(order);
});

router.post("/", async (req, res) => {
  const order = new Order({});
});
module.exports = router;
