//IMPORT
const express = require('express');
const layouts = require('express-ejs-layouts')
const methodOverride = require('method-override');

// create instance of express
const app = express();
// giving the app some settings
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
//this method override needs to come BEFORE the controler below that shows all the routes
app.use(methodOverride('_method'));

// SUM ROUTES HERE
app.get('/', (req, res) => {
    res.render('home');
});

// Import Controlers
app.use('/dinos', require('./routes/dinos'));




app.listen(3000, () => console.log(`🎧You're lisening to the sweet sounds of port 3000🎧`));