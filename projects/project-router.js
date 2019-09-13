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

// find projects by id
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Projects.findById(id)
		.then(project => {
			res.status(200).json(project);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to find that project id' });
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
