import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex('status').insert([
                { status_name: "New" },
                { status_name: "Doing" },
                { status_name: "Done" },
                { status_name: "Paused" }
            ]);
};
