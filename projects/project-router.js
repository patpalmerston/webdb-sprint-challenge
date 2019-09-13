const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

// find projects
router.get('/', (req, res) => {
	Projects.find()
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to find projects' });
		});
});

// add projects
router.post('/', (req, res) => {
	const projectData = req.body;

	Projects.add(projectData)
		.then(project => {
			res.status(200).json(project);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to create project' });
		});
});

module.exports = router;
