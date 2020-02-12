//mounted at '/dinos'

const express = require('express');
const router = express.Router();

//INDEX -GET
router.get('/', (req, res) => {
//TODO get all dinos, pass to page
    res.render('dinos/index', { dinos: [] });
});

//NEW - GET
router.get('/new', (req, res) => {
    res.render('dinos/new');
});

//CREATE - POST


//SHOW - GET
router.get('/:id', (req, res) => {
//TODO Get actual Dino

    res.render('/dinos/show', { dino: { id: req.params.id }});
});

//EDIT - GET
router.get('/edit/:id', (req, res) => {
//TODO get actual dino
    res.render('/dinos/edit', { dino: { id: req.params.id }});
});

//UPDATE - PUT

//DESTROY - DELETE

module.exports = router;