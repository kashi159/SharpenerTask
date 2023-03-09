const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/userDatabase')
var cors = require('cors');

const app = express();
app.use(cors());

const signUpRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
// const expenseRoutes = require('./routes/expense')
const User = require('./models/user');
const UserExpense = require('./models/expense')

app.use(bodyParser.json({ extended: false }));

app.use(signUpRoutes);
app.use(loginRoutes);
// app.use(expenseRoutes)

User.hasMany(UserExpense);
UserExpense.belongsTo(User)

sequelize
// .sync({force: true})
.sync()
.then(result =>{
    // console.log(result);
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
});

async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
 authenticate();