var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const creds = require('../config/creds');

const connection = mysql.createConnection(creds);
connection.connect();

const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');
/* GET home page. */
router.post('/register', (req, res)=>{
	const email = req.body.email;
	const password = req.body.password;
	const hashedPassword = bcrypt.hashSync(password);
	// we now have the user email and password.
	// now we insert then into database.
	const getUser = `SELECT email FROM users where email=?`;
	connection.query(getUser, [email], (error, results)=>{
		if(error) {
			throw error;
		}
		console.log(results);

		if(results.length < 1) {
			const insertQuery = `INSERT INTO users (email, password, token) VALUES (?,?,?)`;
			const token = randToken.uid(60);
			connection.query(insertQuery, [email, hashedPassword, token], (anotherError, anotherResults)=>{
				if(anotherError) {
					throw anotherError;
				}
				console.log(anotherResults);
				res.json({
					token: token,
					msg: "registerSuccess"
				})
			})
		} else {
			res.json({
				msg: "registerFail: Duplicate email address"
			})
		}
	})
});

router.post('/addFav', (req, res)=>{
	const movieId = req.body.movieId;
	const userToken = req.body.token;

	const getUser = `SELECT id FROM users where token=?`;
	connection.query(getUser, [userToken], (error, results)=>{
		if(error) {
			throw error;
		}
		console.log(results);

		if(results.length > 0) {
			// these are the droids we're looking for
			// this is valid token
			const insertQuery = `INSERT INTO favorites (mid, uid) VALUES (?,?)`;

			connection.query(insertQuery, [movieId, results[0].id], (anotherError, anotherResults)=>{
				if(anotherError) {
					throw anotherError;
				}
				console.log(anotherResults);
				res.json({
					msg: "favAddSuccess"
				})
			})
		} else {
			res.json({
				msg: "badToken"
			})
		}
	})

	
	
});

module.exports = router;
