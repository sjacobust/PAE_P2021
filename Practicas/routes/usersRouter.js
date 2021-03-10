const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        console.log("file: ", file);
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const flag = file.mimetype.startsWith('image');
    cb(null, flag);
}

const uploadFile = multer({
    storage: multerStorage,
    filter: fileFilter
});

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
