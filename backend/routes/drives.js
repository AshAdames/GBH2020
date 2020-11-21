const router = require('express').Router();
let Drive = require('../models/drives-model');

router.route('/').get((req, res) => {// website.com/drives/
    Drive.find() //find all users 
        .then(drives => res.json(drives)) //return users in json
        .catch(err => res.status(400).json("Error: " + err));

});

router.route('/add').post((req, res) => {// website.com/drives/add
    const type = req.body.type;
    const drivename = req.body.drivename;
    const username= "test";
    const description = req.body.description;
    const contact = req.body.contact;
    const location = req.body.location;

    const newDrive = new Drive({
        type,
        drivename,
        username,
        description,
        contact,
        location
    });

    newDrive.save()
        .then(() => res.json("Drive Added!"))
        .catch(err => res.status(400).json('Error: ' + err));

});

//router.route(/:id).get(req,res)
//router.route(/update/:id).get(req,res)

module.exports = router;