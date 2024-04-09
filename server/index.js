const express = require('express');
const app = express();

// controllers

/* FEEDBACK: Nice use of dirname!! */
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}

const serveRoe = (req, res, next) => {
    res.send('<p>roe is the SERV ;>');
}

const serveFriends = (req, res, next) => {
    const friends = [{ name: 'nicole' }, { name: 'madhur' }, { name: 'alexa' }, { name: 'eli' }, { name: 'mo' }];
    res.send(friends);
}

const serveCities = (req, res, next) => {
    const cities = [{ name: 'new york' }, { name: 'seattle' }, { name: 'nashville' }, { name: 'cape cod' }];
    res.send(cities);
}

/* FEEDBACK: nice job here! */
const serveGreet = (req, res, next) => {
    const name = req.query.name || "friend";
    res.send(`Hello, ${name} :33333333333`);
}

// endpoints
app.get('/roe', serveRoe);
app.get('/', serveIndex);
app.get('/api/friends', serveFriends);
app.get('/api/cities', serveCities);

/* FEEDBACK: this should also start with /api since it serves data */
app.get('/greet', serveGreet);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 