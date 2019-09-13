const express = require('express');

const Projects = require('./resoures-model');

const router = express.Router();

// find projects
router.get('/', (req, res) => {
	Projects.find()
		.then(resources => {
			res.status(200).json(resources);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to find resources' });
		});
});

// find projects by id
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Projects.findById(id)
		.then(resource => {
			res.status(200).json(resource);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to find that resource id' });
		});
});

// add projects
router.post('/', (req, res) => {
	const resourceData = req.body;

	Projects.add(resourceData)
		.then(resource => {
			res.status(200).json(resource);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to create resource' });
		});
});

module.exports = router;
