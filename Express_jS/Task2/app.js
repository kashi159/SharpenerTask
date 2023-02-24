
const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log('In the MiddleWare!')
    next(); // Allows the request to continue to next middleware in line
})

app.use((req, res, next)=> {
    console.log('In another MiddleWare!')
    res.send('{ key1: value }')
})

app.listen(4000, ()=>{
    console.log('Server is started at port 4000')
});       
