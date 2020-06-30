import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('name', 200).notNullable()
        table.string('email', 200).notNullable().unique()
        table.string('password', 200).notNullable()
        table.string('company', 200).nullable().defaultTo(null)
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('users')
}

