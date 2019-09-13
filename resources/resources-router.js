const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

// find resources
router.get('/', (req, res) => {
	Resources.find()
		.then(resources => {
			res.status(200).json(resources);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to find resources' });
		});
});

// find Resources by id
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Resources.findById(id)
		.then(resource => {
			res.status(200).json(resource);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to find that resource id' });
		});
});

// add Resources
router.post('/', (req, res) => {
	const resourceData = req.body;

	Resources.add(resourceData)
		.then(resource => {
			res.status(200).json(resource);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to create resource' });
		});
});

module.exports = router;
