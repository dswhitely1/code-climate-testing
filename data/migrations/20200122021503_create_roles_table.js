
exports.up = function(knex) {
  return knex.schema.createTable('roles', tbl => {
      tbl.increments();
      tbl.string('roleName').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
