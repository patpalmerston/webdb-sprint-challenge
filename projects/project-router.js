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

// find tasks by project id
router.get('/:id/tasks', (req, res) => {
	const { id } = req.params;

	Projects.findByTask(id)
		.then(tasks => {
			if (tasks.length) {
				res.status(200).json(tasks);
			} else {
				res
					.status(404)
					.json({ message: 'could not find the tasks for given project' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to retrieve tasks' });
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

// add tasks by project id
router.post('/:id/tasks', (req, res) => {
	const taskData = req.body;

	Projects.addTask(taskData)
		.then(task => {
			res.status(201).json(task);
		})

		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'failed to create new task' });
		});
});

module.exports = router;
