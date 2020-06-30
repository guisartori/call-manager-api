import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.alterTable('call_commits', (table) => {
        table.integer('call_id').unsigned()
        table.foreign('call_id').references('calls.id')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.alterTable('call_commits', table => {
        table.dropColumn('call_id')
    })
}

