`use strict`;

const express = require(`express`);
const router = express.Router();
const db = require(`../db/api`);

router.get(`/`, function(req, res) {
  res.send(`this is the users route`);
});

module.exports = router;
