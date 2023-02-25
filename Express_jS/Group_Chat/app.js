const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const chatsRoutes = require('./routes/chats');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', loginRoutes);
app.use('/chats', chatsRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3000);     