const express = require('express');
const configureMiddleware = require('./middleware');

const projectRouter = require('../projects/project-router');
const resourcesRouter = require('../resources/resources-router');

const server = express();

configureMiddleware(server);

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2>Party Time</h2>`);
});

module.exports = server;
