//Connection to sql database & export & used by o.r.m
var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'kimchi4u',
	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
