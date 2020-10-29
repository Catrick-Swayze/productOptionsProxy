require('newrelic');
const express = require('express');

const app = express();

const PORT = 4000;

app.use(express.static(__dirname));

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 2 FEC project.');
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/loaderio-faee2bbf3632f279cf80486363beb340', (req, res) => {
  res.sendFile('./loaderio-faee2bbf3632f279cf80486363beb340.txt');
});

app.listen(PORT, () => {
  console.log(`Starting Proxy at localhost:${PORT}`);
});
