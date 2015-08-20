var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root'
});

connection.query('USE blackbox');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'BlackBox' });
});

router.get('/data', function(req, res) {
    connection.query('SELECT UNIX_TIMESTAMP(timestamp) * 1000 AS timestamp, open AS o, high AS h, low AS l, close AS c FROM prices WHERE symbol="VOD:LDN" AND priceType="CLOSING"', function(err, rows, fields) {
        if (err) throw err;
        res.jsonp(rows);
    });
});

module.exports = router;
