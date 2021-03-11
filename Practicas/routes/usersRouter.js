const express = require('express');
const path = require('path');
const { uploadFile } = require('../src/middlewares');
const router = express.Router();

const { users } = require('../src/models');

router.get('/', (req, res) => {
    res.render('userForm');
})

router.post('/', uploadFile.single('profilePic'), (req, res) => {
    users.insertOne({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.file
    }, (err, result) => {
        if(err) {
            console.error('User was not created');
            res.status(400);
            res.render('userForm');
            return;
        }

        console.log(result);

        res.status(200).redirect(`/users/${req.body.email}`);

    });
    
});

router.get('/:email', (req, res) => {
    res.render('userCreated');
})

module.exports = router;
