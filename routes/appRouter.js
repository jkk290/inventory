const { Router } = require('express');
const appController = require('../controllers/appController');

const appRouter = Router();

appRouter.get('/', appController.itemsListGet);
appRouter.get('/category', appController.categoryListGet);
appRouter.get('/category/add', appController.categoryAddGet);
appRouter.get('/item/add', appController.itemAddGet);
appRouter.get('/item/:id/edit', appController.itemEditGet);
appRouter.post('/category/add', appController.categoryAddPost);
appRouter.post('/item/add', appController.itemAddPost);
appRouter.post('/item/:id/edit', appController.itemEditPost);
appRouter.post('/item/:id/delete', appController.itemDeletePost);

module.exports = appRouter;