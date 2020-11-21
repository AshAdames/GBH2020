const router = require('express').Router();
let User = require('../models/users-model');

router.route('/').get((req, res) => {// website.com/users/
    User.find() //find all users 
        .then(users => res.json(users)) //return users in json
        .catch(err => res.status(400).json("Error: " + err);

});

router.route('/add').post((req, res) => {// website.com/users/add
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json("User Added!"))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;