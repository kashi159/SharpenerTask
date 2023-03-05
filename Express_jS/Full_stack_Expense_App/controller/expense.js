const User = require('../model/expense');

exports.getUsers = (req, res, next) => {
    User.findAll()
    .then(user =>{
        res.json(user);
    })
    .catch(err => (console.log(err)))
}

exports.postUser = (req, res, next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    User.create({
        amount: amount,
        description: description,
        category: category
    }).then(result => {
        return res.json(result);
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteUser = (req, res, next) =>{
    // console.log(req)
    const prodId = req.params.id;
    User.findByPk(prodId)
    .then(id =>{
        return id.destroy()
    }).then(result =>{
        return res.json(result)
    })
    .catch(err => console.log(err))
}
exports.getEditUser = (req, res, next) =>{
    // console.log(req)
    const prodId = req.params.id
    User.findByPk(prodId)
    .then(result =>{
        // console.log(result)
        return res.json(result)
    })
    .catch(err => console.log(err))
}

exports.postEditUser = (req, res, next) =>{
    console.log(req)
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category
    const prodId = req.params.id;
    User.findByPk(prodId)
    .then(id =>{
        id.update({
            amount: amount,
            description: description,
            category: category
        })
        return id.save()
    }).then(result =>{
        return res.json(result)
    })
    .catch(err => console.log(err))
}
