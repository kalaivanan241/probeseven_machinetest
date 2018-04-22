var express = require('express');
var mysql = require('mysql');
var http = require('http');

var app = express();

var router = express.Router();

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'probeseven'
});

db.connect((err) => {
if(err) console.log(err);
else console.log('connected');
});

var options = {
 host: 'samples.openweathermap.org',
 path: '/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
};

function middle(req,res,next) {

    http.request(options,(response) => {
        var str = '';
        response.on('data', chunk => {
            str += chunk;
        });
    
        response.on('end', () => {
            req.weather = JSON.parse(str);
            next();
        });
    }).end();

}


function dbconnect (req,res,next) {
    options.path = `/data/2.5/weather?q=${req.params.name},uk&appid=b6907d289e10d714a6e88b30761fae22`;
    var weather = req.weather;
    let values = {city:req.params.name,
                    temp:weather.main.temp,
                    climate:weather.weather[0].main,
                    wind:weather.wind.speed,
                    cloudness:weather.weather[0].description,
                    pressure:weather.main.pressure,
                    humidity:weather.main.humidity,
                    rain:3.4,
                    sunrise:new Date(weather.sys.sunrise * 1000),
                    sunset:new Date(weather.sys.sunset * 1000),
                    geo: `[${weather.coord.lon},`+` ${weather.coord.lat}]`,
                    date: new Date(),
    }
    let sql = 'INSERT INTO weather SET?'
    let qu = db.query(sql,values,(err, result) => {
        if(err) res.send(err);
        else{
            let array = [];
            array.push(values);
            array.push(req.first);
            res.send(array);
        }
    });
}

function getFirst(req,res,next) {
    let sql = `SELECT * FROM weather WHERE id = (SELECT MAX(id) FROM weather WHERE city ='${req.params.name}')`;
    let qu = db.query(sql,(err, result) => {
        if(err) res.send(err);
        else{
        req.first = result[0];
        next();
        }
    });
}


router.get('/weather/:name', middle,getFirst, dbconnect);


module.exports = router;


