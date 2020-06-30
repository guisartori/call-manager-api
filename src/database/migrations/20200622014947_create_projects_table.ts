import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('projects', table => {
        table.increments('id')
        table.string('title', 200).notNullable()
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('projects')
}

