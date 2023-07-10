const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Youtube-clone server.")
});

app.get('/health', (req, res) => {
    res.send("Youtube-clone server is up and running, Thank you!");
});

module.exports = app;