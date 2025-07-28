const db = require('../storages/queries');

exports.itemsListGet = async (req, res) => {
    const items = await db.getAllItems();
    res.render('itemList', {
        title: 'All Items',
        items: items
    });
};