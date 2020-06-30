import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('status', table => {
        table.increments('id')
        table.string('status_name', 50)
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('status')
}

