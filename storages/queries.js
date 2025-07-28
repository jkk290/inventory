const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query('SELECT * FROM items');
    if (rows.length > 0) {
        return rows;
    } else {
        console.log('No items in database');
    };    
};

module.exports = {
    getAllItems,
};