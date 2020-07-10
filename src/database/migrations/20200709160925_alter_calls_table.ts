import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.alterTable('calls', table => {
        table.dropColumn('new')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.alterTable('calls', (table) => {
        table.integer('new').unsigned()
    })
}

