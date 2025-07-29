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

async function getCategory(id) {
    const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    if (rows.length > 0) {
        return rows[0];
    } else {
        console.log('Category not found in database');
    };
};

async function editCategory(category) {
    await pool.query('UPDATE categories SET name = $2 WHERE id = $1', [category.id, category.name]);
};

async function addCategory(category) {
    await pool.query('INSERT INTO categories (name) VALUES ($1)', [category.name]);
};

async function deleteCategory(id) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        await client.query('DELETE FROM items WHERE category = $1', [id]);
        await client.query('DELETE FROM categories WHERE id = $1', [id]);
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    };
};

async function addItem(item) {
    await pool.query('INSERT INTO items (name, stock, category) VALUES ($1, $2, $3)', [item.name, item.stock, item.category]);
};

async function editItem(item) {
    await pool.query('UPDATE items SET name = $2, stock = $3, category = $4 WHERE id = $1', [item.id, item.name, item.stock, item.category]);
};

async function deleteItem(id) {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
};

module.exports = {
    getAllItems,
    getItem,
    getAllCategories,
    getCategory,
    addCategory,
    editCategory,
    deleteCategory,
    addItem,
    editItem,
    deleteItem
};