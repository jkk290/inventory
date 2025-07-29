const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.categoryListGet);
categoriesRouter.get('/add', categoriesController.categoryAddGet);
categoriesRouter.get('/:id/edit', categoriesController.categoryEditGet);
categoriesRouter.post('/add', categoriesController.categoryAddPost);
categoriesRouter.post('/:id/edit', categoriesController.categoryEditPost);
categoriesRouter.post('/:id/delete', categoriesController.categoryDeletePost);

module.exports = categoriesRouter;