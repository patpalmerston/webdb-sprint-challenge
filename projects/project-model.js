const db = require('../data/dbConfig');

module.exports = {
	add,
	addTask,
	find,
	findById,
	findByTask
};

function find() {
	return db('projects')
}

function findById(id) {
	return db('projects')
		.where({ id })
		.first();
}

function findByTask() {
	console.log('findByTask');
}

function add(project) {
	return db('projects')
		.insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}

function addTask() {
	console.log('addTask');
}
