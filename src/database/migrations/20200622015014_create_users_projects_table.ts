import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users_projects', table => {
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
        table.integer('project_id').unsigned()
        table.foreign('project_id').references('projects.id')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('users_projects')
}

