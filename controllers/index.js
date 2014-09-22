'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

	var model = new IndexModel();

	router.get('/', function (req, res) {
		res.render('index', model);
	});

	router.get('/name', function (req, res) {
		res.render('index', {name: "test model"});
	});

    router.get('/setLanguage/:locale', function (req, res) {
        res.cookie('locale', req.params.locale);
        res.redirect('/');
    });
};
