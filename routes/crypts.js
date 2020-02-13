//mounted at '/crypts'

// routes...

const express = require('express');
const router = express.Router();
const fs = require ('fs');
    
// INDEX - GET
    router.get('/', (req, res) => {
        // res.send('all the cryptids');
        let allCrypts = fs.readFileSync('./cryptids.json');
        let cryptData = JSON.parse(allCrypts);

        res.render('crypts/index', { crypts: cryptData })
    });

// NEW - GET (show)
router.get('/new', (req, res) => {
    // res.send('a form for making a new cryptid')
    res.render('crypts/new')
});

// SHOW - GET
    router.get('/:id', (req, res) => {
        // res.send(`showing one cryptid`)
        //get actual crypt
        let crypts = fs.readFileSync('./cryptids.json');
        let cryptData = JSON.parse(crypts);
        let cryptIndex = parseInt(req.params.id);
        let oneCrypt = cryptData[cryptIndex];
        oneCrypt.id = cryptIndex;

        res.render('crypts/show', { crypts: oneCrypt });
    });
    
// CREATE - POST
    router.post('/', (req, res) => {
        // res.send('create a new dino')
        console.log(req.body);
        // read crypts
        let crypts = fs.readFileSync('./cryptids.json');
        // JSON parse crypts
        let cryptData = JSON.parse(crypts);
        // add req.body to the end of crypts
        cryptData.push(req.body);
        // JSON stringify crypts
        let newCrypts = JSON.stringify(cryptData);
        // write crypts
        fs.writeFileSync('./cryptids.json', newCrypts);
        //redirect to show page for new dino 
        res.redirect(`/crypts/${cryptData.length - 1}`);
    });



// EDIT - GET (show)
    router.get('/edit/:id', (req, res) => {
        // res.send('a form for editing')
        let crypts = fs.readFileSync('./cryptids.json');
        crypts = JSON.parse(crypts);
        let cryptIndex = parseInt(req.params.id);
        let oneCrypt = crypts[cryptIndex];
        oneCrypt.id = cryptIndex;

        res.render('crypts/edit', { crypts: oneCrypt });
    })

//  UPDATE - PUT
    router.put('/:id', (req, res) => {
        console.log(req.body);
        //read the file
        let crypts = fs.readFileSync('./cryptids.json');
        //json parse the crypts
        crypts = JSON.parse(crypts);
        //change the name and image of crypt at index
        crypts[parseInt(req.params.id)] = req.body
        fs.writeFileSync('./cryptids.json', JSON.stringify(crypts));
        //redirect
        res.redirect(`/crypts/${req.params.id}`);
    })

// DESTROY - DELETE
    router.delete('/:id', (req, res) => {
        //read crypts
        let crypts = fs.readFileSync('./cryptids.json');
        //JSON parse crypts
        crypts = JSON.parse(crypts);
        //remove crypts from array at index
            //splice of life.....
        let deadCrypts = crypts.splice(req.params.id, 1);
        //write JSON stringyfied version of crypts
        fs.writeFileSync('./cryptids.json', JSON.stringify(crypts));
        console.log(`Press F to pay respects to ${deadCrypts[0].name}`);
        //redirect
        res.redirect('/crypts');
    })
module.exports = router;