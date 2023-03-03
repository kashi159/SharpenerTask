const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    // console.log(req)
    User.findAll()
    .then(user => {
        res.json(user)
    })
    .catch(err => console.log(err))
}

exports.getUser = (req, res, next) =>{
  const prodId = req.params.id;
  User.findByPk(prodId)
  .then(user =>{
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
    return res.json(result);
  })
  .catch(err => console.log(err))
}

exports.postDeleteUser= (req, res, next) => {
    // console.log(req)
    const prodId = req.params.id;
    // console.log(prodId)
    User.findByPk(prodId)
    .then(product =>{
     return product.destroy();
  })
  .then(result => {
    return res.json(result);
  })
  .catch(err => console.log(err));
}

exports.postEditUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const prodId = req.params.id;
  User.findByPk(prodId)
  .then(product =>{
      // console.log(product)
      product.update({
      name: name,
      email: email
    });
    return product.save()
  })
  .then(result => {
    // console.log(result)
    return res.json(result);
  })
  .catch(err => console.log(err))
}