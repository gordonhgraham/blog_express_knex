'use strict';

const express = require(`express`);
const router = express.Router();
const users = require(`./users`);
const posts = require(`./posts`);

router.get(`/`, (req, res) => {
  res.render(`index`, { title: `Express` });
});

router.use(`/users`, users);
router.use(`/posts`, posts);

module.exports = router;
