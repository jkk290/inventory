const db = require('../storages/queries');

exports.itemsListGet = async (req, res) => {
    const items = await db.getAllItems();
    res.render('itemList', {
        title: 'All Items',
        items: items
    });
};

exports.categoryAddGet = (req, res) => {
    res.render('categoryAdd', {
        title: 'New Category'
    });
};

exports.itemAddGet = (req, res) => {
    res.render('itemAdd', {
        title: 'Add Item'
    });
};

exports.categoryAddPost = async (req, res) => {
    const category = { name: req.body.categoryName };
    await db.addCategory(category);
    res.redirect('/');
};

exports.itemAddPost = async (req, res) => {
    const item = { name: req.body.itemName, category: req.body.itemCategory, stock: req.body.itemStock };
    await db.addItem(item);
    res.redirect('/');
};