//mounted at '/dinos'

//this are all my routes...


const express = require('express');
const router = express.Router();
const fs = require('fs');

//INDEX -GET
router.get('/', (req, res) => {
//get all dinos, pass to page
    let allDinos = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(allDinos);

    res.render('dinos/index', { dinos: dinoData });
});

//NEW - GET
router.get('/new', (req, res) => {
    res.render('dinos/new');
});

//CREATE - POST
router.post('/', (req, res) => {
    console.log(req.body);
    // read dinos
    let dinos = fs.readFileSync('./dinosaurs.json');
    // JSON parse dinos
    let dinoData = JSON.parse(dinos);
    // add req.body to the end of dinos
    dinoData.push(req.body);
    // JSON stringify dinos
    let newDinos = JSON.stringify(dinoData);
    // write dinos
    fs.writeFileSync('./dinosaurs.json', newDinos);

    //TODO redirect to show page for new dino
    res.redirect(`/dinos/${dinoData.length - 1}`);
})

//SHOW - GET
router.get('/:id', (req, res) => {
//Get actual dino
    let dinos = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinos);
    let dinoIndex = parseInt(req.params.id);
    let oneDino = dinoData[dinoIndex];
    oneDino.id = dinoIndex;

    res.render('dinos/show', { dino: oneDino });
});

//EDIT - GET
router.get('/edit/:id', (req, res) => {
//TODO get actual dino
    let dinos = fs.readFileSync('./dinosaurs.json');
    dinos = JSON.parse(dinos);
    let dinoIndex = parseInt(req.params.id);
    let oneDino = dinos[dinoIndex];
    oneDino.id = dinoIndex;

    res.render('dinos/edit', { dino: oneDino });
});

//UPDATE - PUT
router.put('/:id', (req, res) => {
   console.log(req.body);
    // read the file
    let dinos = fs.readFileSync('./dinosaurs.json');
    // json parse the dinos
    dinos = JSON.parse(dinos);
    //change thename and type of dino at index
    dinos[parseInt(req.params.id)] = req.body
   
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos));
    // redirect
    res.redirect(`/dinos/${req.params.id}`);
});

//DESTROY - DELETE
router.delete('/:id', (req, res) => {
    // console.log(`Deleting dino at id ${req.params.id}`);

    // read dinos
    let dinos = fs.readFileSync('./dinosaurs.json');
    //JSON parse dinos
    dinos = JSON.parse(dinos);
    // remove dino from array at index
        //splice of life - it returns a value
    let deadDino = dinos.splice(req.params.id, 1);

    // write JSON stringified version of dinos
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos));
    console.log(`Press F to pay respects to ${deadDino[0].name}`);
    res.redirect('/dinos');
});

module.exports = router;