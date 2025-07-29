const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = Router();

categoriesRouter.get('/category', categoriesController.categoryListGet);
categoriesRouter.get('/category/add', categoriesController.categoryAddGet);
categoriesRouter.get('/category/:id/edit', categoriesController.categoryEditGet);
categoriesRouter.post('/category/add', categoriesController.categoryAddPost);
categoriesRouter.post('/category/:id/edit', categoriesController.categoryEditPost);
categoriesRouter.post('/category/:id/delete', categoriesController.categoryDeletePost);

module.exports = categoriesRouter;