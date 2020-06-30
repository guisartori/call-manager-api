import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('functionalities', table => {
        table.increments('id')
        table.string('name', 200).notNullable()
        table.integer('project_id').unsigned()
        table.foreign('project_id').references('projects.id')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('functionalities')
}

