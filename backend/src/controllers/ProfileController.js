const connection = require('../database/connection')

// TEM QUE SER NO BODY
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization
        console.log(`ID recebido: ${ong_id}, ${request.headers.authorization}`)
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return response.json(incidents)
    }
}