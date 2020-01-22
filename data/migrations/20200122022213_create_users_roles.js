exports.up = function (knex) {
    return knex.schema.createTable('user_roles', tbl => {
        tbl.integer('userId').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.integer('roleId').notNullable().unsigned().references('id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.primary(['userId', 'roleId']);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user_roles');
};
