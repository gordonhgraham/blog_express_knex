`use strict`;

const express = require(`express`);
const router = express.Router();
const db = require(`../db/api`);

router.get(`/`, function(req, res) {
  db.getAllUsers().then(users => {
    res.render(`users/users`, { users: users });
  })
});

router.get(`/new`, function(req, res) {
  res.render(`users/new`);
});

router.get(`/:id`, function(req, res) {
  db.getOneUser(req.params.id).then(user => {
    res.render(`users/user`, { user: user })
  })
});

router.post(`/`, function(req, res) {
  console.log(req.body);
  db.createOneUser(req.body).then(() => {
    res.redirect('/users')
  });
});

router.put(`/:id`, function(req, res) {
  console.log(req.body);
  res.redirect('/users')
});

// router.delete(`/:id`, function(req, res) {
//   res.send(`this will delete a user`);
// });

router.get(`/:id/edit`, function(req, res) {
  db.getOneUser(req.params.id).then(user => {
    res.render('users/edit', { user: user })
  })
});

module.exports = router;
