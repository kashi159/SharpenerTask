const User = require('../models/user');
const Sib = require('sib-api-v3-sdk');
require('dotenv').config();
const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY
const sender = {
    email: 'kashifzafar15@gmail.com',
    name: 'Expense Tracker App'
}

exports.postForgetPassword = async (req, res, next) => {
    const email = req.body.email;
    console.log(email)
    try{
        const user = await User.findOne({ where: { email: email } })
        if (!user) {
            return res.status(409).json({ error: "User does not exists" });
        }else{
            const tranEmailAPi = new Sib.TransactionalEmailsApi()
            const recievers = [{
                email: email
            }]
            const response = await tranEmailAPi.sendTransacEmail({
                sender,
                to: recievers,
                subject: 'Password Reset Link',
                textContent: `Please click on the link to reset your password.
                if note done by you please change your password.`,
                htmlContent: `<p>Please click on the link to reset your password.
                if note done by you please change your password.</p>
                <a href="http://127.0.0.1:5500/FrontEnd/Login/login.html">Reset link</a>`
            })
            console.log(response)
            // return res.status(200).json(user)
        }
    }
    catch(err) {
        console.error(err);
        return res.status(409).json({ error: "User does not exists" });
    };
}