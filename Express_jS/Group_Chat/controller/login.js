

exports.getLogin = (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login/" method="POST">
    UserName<input id="username" type="text" name="title">
    <button type="submit">LOGIN</button>
    </form>`);
  };

  exports.postLogin = (req, res, next) => {
    console.log(req.body);
    res.redirect('/chats/');
  }