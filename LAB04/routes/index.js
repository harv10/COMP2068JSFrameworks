const express = require('express');
const router = express.Router();

router.get('/movie1', (req, res) => {
    res.render('movie1', { title: 'Movie 1' });
});

router.get('/movie2', (req, res) => {
    res.render('movie2', { title: 'Movie 2' });
});

router.get('/movie3', (req, res) => {
    res.render('movie3', { title: 'Movie 3' });
});

router.get('/movie4', (req, res) => {
    res.render('movie4', { title: 'Movie 4' });
});

module.exports = router;