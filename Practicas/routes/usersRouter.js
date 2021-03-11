const express = require('express');
const path = require('path');
const { uploadFile } = require('../src/middlewares');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('userForm');
})

router.post('/', uploadFile.single('profilePic'), (req, res) => {
    if(req.file) {
        res.end('User Created!');
    } else {
        res.end('File Not supported');
    }
    
});

module.exports = router;
