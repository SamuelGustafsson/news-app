/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var app = express();


/**
 * Controllers (route handlers).
 */
var apiController = require('./controllers/api.controller');


/**
 * Initiation function
 */
exports.init = function () {
	'use strict';

	/**
	 * Routes
	 */
	app.use('/', express.static(path.resolve(__dirname + '/../client'), { etag: false, maxage: 0 }));
	app.get('/api/*', apiController.getContent);
	// app.get('/', function (req, res) {
	// 	res.sendFile(path.resolve(__dirname + '/../client/', 'index.html'));
	// });



	/**
	 * Start server
	 */
	app.listen(5000, function () {
		console.log('Server running at http://localhost:5000');
	});
};