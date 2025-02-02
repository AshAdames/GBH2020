const router = require('express').Router();
let User = require('../models/users-model');

router.route('/login').post((req, res) => {// website.com/users/login
    console.log("find one")
    User.findOne({ username: req.body.username, password:req.body.password }, (err, user) => {
            if (err) {
                res.send(err)
            } else{
                //res.send(user)
                res.redirect("http://localhost:3000/driveform")
            }
        }
    )
      
});

router.route('/add').post((req, res) => {// website.com/users/add
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const isLoggedin = true;
    //error check for passwordconf
    const newUser = new User({
        username,
        password,
        email,
        isLoggedin
    });

    newUser.save()
        .then(() => res.json("User Added!"))
        .catch(err => res.status(400).json('Error: ' + err));
    res.redirect("/driveform")

});


/*router.route('/').get((req, res) => {// website.com/users/
    User.find() //find all users 
        .then(users => res.json(users)) //return users in json
        .catch(err => res.status(400).json("Error: " + err));

});*/

module.exports = router;