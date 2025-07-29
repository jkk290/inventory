const db = require('../storages/queries');

exports.categoryListGet = async (req, res) => {
    const categories = await db.getAllCategories();
    res.render('categoryList', {
        title: 'All Categories',
        categories: categories
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

exports.categoryAddPost = async (req, res) => {
    const category = { name: req.body.categoryName };
    await db.addCategory(category);
    res.redirect('/');
};

exports.categoryEditPost = async (req, res) => {
    const category = { id: req.params.id, name: req.body.categoryName };
    await db.editCategory(category);
    res.redirect('/category');
};

exports.categoryDeletePost = async (req, res) => {
    await db.deleteCategory(req.params.id);
    res.redirect('/category');
};