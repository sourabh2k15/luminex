const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

// config
const publicDir = 'public';
const port = process.env.PORT || 5000


// setting templating engine
app.set('view engine', 'ejs');
app.set('views', publicDir + '/views');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//app.use('/css', express.static(__dirname + '/public'));

// start app
app.listen(port, function(){
	console.log("server running");
});


/* add your domain extensions and the relevant mappings to view files + data */

// english

// index page
app.get('/en', function(req, res) {
    res.render('pages/index', {
    	title : "Home - Luminex",
    	css : "css/index.css", 
        language : "en"
    });
});

// about page
app.get('/en/about', function(req, res) {
    res.render('pages/about', {
    	title : "About Us - Luminex",
    	css : "css/about.css",
        language : "en"
    });
});

// contact page
app.get('/en/contact', function(req, res) {
    res.render('pages/contact', {
    	title : "Contact Us - Luminex",
    	css : "css/contact.css",
        language : "en"
    });
});

// services page
app.get('/en/services', function(req, res) {
    res.render('pages/services', {
    	title : "Services - Luminex",
    	css : "css/services.css",
        language : "en"
    });
});

// TOS page
app.get('/en/tos', function(req, res) {
    res.render('pages/tos', {
    	title : "Terms of Services - Luminex",
    	css : "css/tos.css",
        language : "en"
    });
});

// industries page
app.get('/en/industries', function(req, res) {
    res.render('pages/industries', {
    	title : "industries - Luminex",
    	css : "css/industries.css",
        language : "en"
    });
});


// index page
app.get('/ar-sa', function(req, res) {
    res.render('pages/index', {
        title : "Home - Luminex",
        css : "css/index.css", 
        language : "ar-sa"
    });
});

// about page
app.get('/ar-sa/about', function(req, res) {
    res.render('pages/about', {
        title : "About Us - Luminex",
        css : "css/about.css",
        language : "ar-sa"
    });
});

// contact page
app.get('/ar-sa/contact', function(req, res) {
    res.render('pages/contact', {
        title : "Contact Us - Luminex",
        css : "css/contact.css",
        language : "ar-sa"
    });
});

// services page
app.get('/ar-sa/services', function(req, res) {
    res.render('pages/services', {
        title : "Services - Luminex",
        css : "css/services.css",
        language : "ar-sa"
    });
});

// TOS page
app.get('/ar-sa/tos', function(req, res) {
    res.render('pages/tos', {
        title : "Terms of Services - Luminex",
        css : "css/tos.css",
        language : "ar-sa"
    });
});

// industries page
app.get('/ar-sa/industries', function(req, res) {
    res.render('pages/industries', {
        title : "industries - Luminex",
        css : "css/industries.css",
        language : "ar-sa"
    });
});