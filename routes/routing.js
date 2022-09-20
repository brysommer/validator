const express = require('express');
const router = express.Router();

router.get('/video/home.mp4', (req, res, next) => {
    console.log('aaaaaaaaa');
    res.json('aaaaa');
});

router.get('/', (req, res) => {
    res.render('main');
});

module.exports = router;