
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};

// para criar migration
// 'npx knex migrate:make create_ongs'

// para executar a migration
// 'npx knex migrate:latest'

// 'npx next' lista todos os comandos

// 'npx knex migrate::rollback' desfaz a ultima migration