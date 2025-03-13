const express = require('express');
const router = express.Router();
const data = require('../posts');

//middleware
router.use(express.static('public'));

//index
router.get('/', (req, res) => {
    //res.send('Posts list');

    res.json(data);
});

//show
router.get('/:slug', (req, res) => {
    res.send(`Showing post: ${req.params.slug}`);
});

//store
router.post('/', (req, res) => {
    res.send('Upload a new post');
});

//update
router.put('/:slug', (req, res) => {
    res.send(`Update the post: ${req.params.slug}`);
});

//modify
router.patch('/:slug', (req, res) => {
    res.send(`Modify the post: ${req.params.slug}`);
});

//delete
router.delete('/:slug', (req, res) => {
    res.send(`Delete the post: ${req.params.slug}`);
});

module.exports = router;