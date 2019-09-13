const db = require('../data/dbConfig');

module.exports = {
	add,
	addTask,
	find,
	findById,
	findByTask
};

function find() {
	return db('projects');
}

function findById(id) {
	return db('projects')
		.where({ id })
		.first();
}

function findByTask(id) {
	return db('tasks as t')
		.join('projects as p', 'p.id', 't.project_id')
		.select('t.id', 't.description', 't.notes', 't.completed')
		.where('t.project_id', id);
}

function add(project) {
	return db('projects')
		.insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}

function addTask(task) {
	return db('tasks')
		.insert(task)
		.then(ids => {
			return findByTask(ids[0]);
		});
}
