

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments()

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.string('value').notNullable()
        
        table.string('ong_id').notNullable()

        table.foreign('ong_id').references('id').inTable('ongs')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  };
  
  // para criar migration
  // 'npx knex migrate:make create_ongs'
  
  // para executar a migration
  // 'npx knex migrate:latest'

  // 'npx next' lista todos os comandos

  // 'npx knex migrate::rollback' desfaz a ultima migration