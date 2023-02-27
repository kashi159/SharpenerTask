
const fs = require('fs')

exports.getChat = (req, res, next)=> {
    fs.readFile('message.txt', (err, data)=>{
        if(err){
            console.log(err);
            data = 'No Chat Exists'
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/chats/" method="POST">
        <input id="message" name="message" type="text" placeholder="message">
        <input id="username" name="username" type="hidden">
        <button type="submit">Send</button>
        </form><br>`
        );
    })
};

exports.postChat = (req, res)=>{
    console.log(req.body);
    fs.writeFile('message.txt',`${req.body.username}: ${req.body.message}`,{flag: 'a'} ,(err) => {
       err ? console.log(err) : res.redirect('/chats/');
    })
   
}