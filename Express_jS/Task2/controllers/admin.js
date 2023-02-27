const path = require('path');
const rootDir = require('../util/path')

exports.getAdmin = (req, res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAdmin = (req, res, next)=>{
    console.log(req.body);
    res.redirect('/shop/');
}