const mongoose = require('mongoose');
const User = mongoose.model('userWeather');

module.exports = app => {

    app.get("/", function (req, res){
        res.send("home");
    })
    
    app.get("/login",function (req, res){
        res.send("login");
    })
    
    app.get("/register", function (req, res){
        res.send("register");
    })
    
    app.post("/register", function (req, res){
        const newUser = new User({
            userEmail: req.body.userEmail,
            userPassword: req.body.password
        });
        console.log(req.body);
        newUser.save(function (err){
            if(err){
                console.log(err);
            }else {
                res.send("secret");
            }
          })
    })

    app.post("/login", function(req, res){
        const username = req.body.userEmail;
        const password = req.body.password;

        User.findOne({userEmail: username}, function(err,foundUser){
            if(err) {
                console.log(err);
            } else {
                if(foundUser) {
                    if(foundUser.userPassword === password) {
                        res.send('You have successfully logged in!');
                    }
                }
            }
        })
    })
}

