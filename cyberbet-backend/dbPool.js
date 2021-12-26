const Pool = require('pg').Pool

const pool = new Pool({
        connectionString:
            //"postgres://sryoaenxqgucly:84625bb64de79f9bcbfe4c918f883d76e9f791871c1a019d748a681a79cb2e52@ec2-34-230-115-172.compute-1.amazonaws.com:5432/dajbkndnqpg2mf",
        process.env.DATABASE_URL,
        ssl: {
                rejectUnauthorized: false,
        },
});



// const pool = new Pool(
//     {
//         user: "postgres",
//         password: 'admin',
//         host: "localhost",
//         port: 5432,
//         database: "online_store"
//     }
// )

module.exports = pool
