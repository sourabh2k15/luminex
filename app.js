const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

// config
const publicDir = 'public';
const port = giprocess.env.PORT || 5000


// setting templating engine
app.set('view engine', 'ejs');
app.set('views', publicDir + '/views');


app.use(bodyParser.json());
app.use(express.static(publicDir));

// start app
app.listen(port, function(){
	console.log("server running");
});


/* add your domain extensions and the relevant mappings to view files + data */

// index page 
app.get('/', function(req, res) {
    res.render('pages/index', {
    	title : "Home - Luminex",
    	css : "css/index.css"
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about', {
    	title : "About Us - Luminex",
    	css : "css/about.css"
    });
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact', {
    	title : "Contact Us - Luminex",
    	css : "css/contact.css"
    });
});

// services page
app.get('/services', function(req, res) {
    res.render('pages/services', {
    	title : "Services - Luminex",
    	css : "css/services.css"
    });
});

// TOS page
app.get('/tos', function(req, res) {
    res.render('pages/tos', {
    	title : "Terms of Services - Luminex",
    	css : "css/tos.css"
    });
});

// industries page
app.get('/industries', function(req, res) {
    res.render('pages/industries', {
    	title : "industries - Luminex",
    	css : "css/industries.css"
    });
});


