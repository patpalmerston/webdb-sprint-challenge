exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.string('project_name', 128).notNullable();
			tbl.string('description', 255);
			tbl.boolean('completed').defaultTo(false);
		})
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('resource_name').notNullable();
			tbl.string('description');
		})
		.createTable('project_resources', tbl => {
			tbl.increments();

			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

			tbl
				.integer('resource_id')
				.unsigned()
				.references('id')
				.inTable('resources')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

			tbl.unique(['project_id', 'resource_id']);
		})
		.createTable('tasks', tbl => {
			tbl.increments();

			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

			tbl.string('description', 255).notNullable();
			tbl.string('notes', 255);
			tbl.boolean('completed').defaultTo(false);
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('steps')
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
