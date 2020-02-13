//mounted at '/crypts'

// routes...

const express = require('express');
const router = express.Router();
// const fs = require ('fs');
    
// INDEX - GET
    router.get('/', (req, res) => {
        res.send('all the cryptids');
    })
// SHOW - GET
    router.get('/:id', (req, res) => {
        res.send(`showing ${id} cryptid`)
    });
// CREATE - POST
    router.post('/', (req, res) => {
        res.send('creat a new dino')
    });
// NEW - GET (show)
    router.get('/new', (req, res) => {
        res.send('a form for making a new cryptid')
    });

// EDIT - GET (show)
    router.get('/edit/:id', (req, res) => {
        res.send('a form for editing')
    })

module.exports = router;