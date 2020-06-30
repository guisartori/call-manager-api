import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('calls', table => {
        table.increments('id')
        table.string('title', 200).notNullable()
        table.text('description').nullable().defaultTo(null)
        table.integer('functionality_id').unsigned()
        table.foreign('functionality_id').references('functionalities.id')
        table.integer('responsable_id').unsigned()
        table.foreign('responsable_id').references('users.id')
        table.integer('creator_id').unsigned()
        table.foreign('creator_id').references('users.id')
        table.integer('project_id').unsigned()
        table.foreign('project_id').references('projects.id')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('calls')
}

