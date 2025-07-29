const db = require('../storages/queries');

exports.categoryListGet = async (req, res) => {
    const categories = await db.getAllCategories();
    res.render('categoryList', {
        title: 'All Categories',
        categories: categories
    });
};

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

exports.categoryEditGet = async (req, res) => {
    const category = await db.getCategory(req.params.id);
    res.render('categoryEdit', {
        title: 'Edit Category',
        category: category
    });
};

exports.itemAddGet = async (req, res) => {
    const categories = await db.getAllCategories();
    res.render('itemAdd', {
        title: 'Add Item',
        categories: categories
    });
};

exports.itemEditGet = async (req, res) => {
    const item = await db.getItem(req.params.id);
    const categories = await db.getAllCategories();
    res.render('itemEdit', {
        title: 'Edit Item',
        item: item,
        categories: categories
    });
};

exports.categoryAddPost = async (req, res) => {
    const category = { name: req.body.categoryName };
    await db.addCategory(category);
    res.redirect('/');
};

exports.categoryEditPost = async (req, res) => {
    const category = { id: req.params.id, name: req.body.categoryName };
    await db.editCategory(category);
    res.redirect('/category');
}

exports.itemAddPost = async (req, res) => {
    const item = { name: req.body.itemName, category: req.body.itemCategory, stock: req.body.itemStock };
    await db.addItem(item);
    res.redirect('/');
};

exports.itemEditPost = async (req, res) => {
    const item = { id: req.params.id, name: req.body.itemName, category: req.body.itemCategory, stock: req.body.itemStock };
    await db.editItem(item);
    res.redirect('/');
};

exports.itemDeletePost = async (req, res) => {
    await db.deleteItem(req.params.id);
    res.redirect('/');
}