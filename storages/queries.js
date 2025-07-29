const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query('SELECT i.name, c.name as category, i.stock FROM items as i JOIN categories as c ON i.category = c.id');
    if (rows.length > 0) {
        return rows;
    } else {
        console.log('No items in database');
    };    
};

async function getAllCategories() {
    const { rows } = await pool.query('SELECT * FROM categories');
    if (rows.length > 0) {
        return rows;
    } else {
        console.log('No categories in database');
    };
};

async function addCategory(category) {
    await pool.query('INSERT INTO categories (name) VALUES ($1)', [category.name]);
}

async function addItem(item) {
    await pool.query('INSERT INTO items (name, stock, category) VALUES ($1, $2, $3)', [item.name, item.stock, item.category]);
}

module.exports = {
    getAllItems,
    getAllCategories,
    addCategory,
    addItem,
};