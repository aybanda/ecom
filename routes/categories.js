const express = require("express");
const category = require("../models/category");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const categoryList = await category.find();
  if (!categoryList) {
    res.status(500).json({
      success: false,
    });
    res.status(200).send(categoryList);
  }
  res.send(categoryList);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });
  category = await category.save();
  if (!category) return res.status(400).send("the category cannot be created");

  res.send(category);
});

module.exports = router;
