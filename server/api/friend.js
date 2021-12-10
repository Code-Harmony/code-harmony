const router = require("express").Router();
const {
  models: { Friend },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Friend.findAll());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Friend.create(req.body));
  } catch (err) {
    next(err);
  }
});


