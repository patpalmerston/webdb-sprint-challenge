const express = require('express');

const Projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res) => {
	Projects.find()
	.then(projects => {
		res.status(200).json(projects)
	})
	.catch(err => {
		console.log(err)
		res.status(500).json({error: 'unable to find projects'})
	})
})



module.exports = router;