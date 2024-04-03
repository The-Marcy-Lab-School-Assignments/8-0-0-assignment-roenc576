const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}

const serveRoe = (req, res, next) => {
    res.send('<p>roe at your SERVice ;>');
}

// endpoints
app.get('/roe', serveRoe);
app.get('/', serveIndex);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 