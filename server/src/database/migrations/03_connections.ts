import Knex from 'knex'

export const up = async (knex: Knex) => {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()

        table.integer('user_id')
            .references('id')
            .inTable('users')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable()
    })
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('connections')
}
