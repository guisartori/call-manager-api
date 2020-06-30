import knex from 'knex'
//TODO: COLOCAR VARIÁVEIS GLOBAIS COM DOTENV-SECURY
const connection = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'call_manager'
    }
})

export default connection