const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login/" method="POST">
  UserName<input id="username" type="text" name="title">
  <button type="submit">LOGIN</button>
  </form>`);
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.redirect('/chats/');
});


module.exports = router;
