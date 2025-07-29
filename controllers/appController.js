const db = require('../storages/queries');

exports.itemsListGet = async (req, res) => {
    const items = await db.getAllItems();
    res.render('itemList', {
        title: 'All Items',
        items: items
    });
};

exports.itemAddGet = (req, res) => {
    res.render('itemAdd', {
        title: 'Add New Item'
    });
};

exports.itemAddPost = async (req, res) => {
    const item = { name: req.body.itemName, category: req.body.itemCategory, stock: req.body.itemStock };
    await db.addItem(item);
    res.redirect('/');
}