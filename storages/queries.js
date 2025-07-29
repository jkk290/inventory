const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query('SELECT * FROM items');
    if (rows.length > 0) {
        return rows;
    } else {
        console.log('No items in database');
    };    
};

async function addItem(item) {
    await pool.query('INSERT INTO items (name, stock, category) VALUES ($1, $2, $3)', [item.name, item.stock, item.category]);
}

module.exports = {
    getAllItems,
    addItem,
};