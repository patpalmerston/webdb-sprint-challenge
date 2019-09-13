const express = require('express');
const configureMiddleware = require('./middleware');

// const projectRouter = require('../projects/project-router')

const server = express();

configureMiddleware(server);

// server.use('/api/projects', projectRouter)

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2>Party Time</h2>`);
});

module.exports = server;
