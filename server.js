//IMPORT
const express = require('express');
const layouts = require('express-ejs-layouts')

// create instance of express
const app = express();
// giving the app some settings
app.set('view engine', 'ejs');
app.use(layouts);

// SUM ROUTES HERE
app.get('/', (req, res) => {
    res.render('home');
});

// Import Controlers
app.use('/dinos', require('./routes/dinos'));




app.listen(3000, () => console.log(`🎧You're lisening to the sweet sounds of port 3000🎧`));