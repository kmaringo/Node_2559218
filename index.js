const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 8282;


app.use(express.static('public'))

app.set('views', path.join(__dirname +'/public/views'));
app.set('view engine', 'hbs'); 

hbs.registerPartials(__dirname + '/public/partials');


app.get('/', function(req, res) {
    res.render('home',{
        titulo: "@"
    });
})

app.listen(port,() => console.log(`escuchando puerto ${port}`));