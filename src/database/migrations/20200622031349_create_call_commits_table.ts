import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('call_commits', table => {
        table.increments('id')
        table.string('comment', 500).notNullable()
        table.integer('commiter_id').unsigned()
        table.foreign('commiter_id').references('users.id')
        table.integer('status_id').unsigned()
        table.foreign('status_id').references('status.id')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('call_commits')
}