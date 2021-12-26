const db = require('../dbPool')

module.exports = async function () {
    const typesData = await db.query('SELECT * FROM types')
    //return typesData.rows[0]


    return 'mcleve6@blogs.com'
};
