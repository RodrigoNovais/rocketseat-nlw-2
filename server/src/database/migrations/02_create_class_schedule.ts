import Knex from 'knex'

export const up = async (knex: Knex) => {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()

        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()

        table.integer('class_id')
            .references('id')
            .inTable('classes')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('class_schedule')
}
