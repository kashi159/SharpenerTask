const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    // console.log(req)
    User.findAll()
    .then(user => {
        res.json(user)
    })
    .catch(err => console.log(err))
}

exports.postUser = (req, res, next) => {
    // console.log(req)
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name: name,
    email: email
  })
  .then(result =>{
    // console.log(result);
    // res.redirect('/');
    return result;
  })
  .catch(err => console.log(err))
}

exports.postDeleteUser= (req, res, next) => {
    // console.log(req)
    const prodId = req.params.id;
    console.log(prodId)
    User.findByPk(prodId)
    .then(product =>{
     return product.destroy();
  })
  .then(result => {
    // console.log("result");
    // res.redirect('/')
    return result;
  })
  .catch(err => console.log(err));
}