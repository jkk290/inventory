const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query('SELECT i.id, i.name, c.name as category, i.stock FROM items as i JOIN categories as c ON i.category = c.id');
    if (rows.length > 0) {
        return rows;
    } else {
        console.log('No items in database');
    };    
};

async function getItem(id) {
    const { rows } = await pool.query('SELECT i.id, i.name, c.name as category, i.stock FROM items as i JOIN categories as c ON i.category = c.id WHERE i.id = $1', [id]);
    if (rows.length > 0) {
        return rows[0];
    } else {
        console.log('Item not found in database');
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

async function editItem(item) {
    await pool.query('UPDATE items set name = $2, stock = $3, category = $4 WHERE id = $1', [item.id, item.name, item.stock, item.category]);
}

module.exports = {
    getAllItems,
    getItem,
    getAllCategories,
    addCategory,
    addItem,
    editItem
};