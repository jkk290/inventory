const { Router } = require('express');
const appController = require('../controllers/appController');

const appRouter = Router();

appRouter.get('/', appController.itemsListGet);
appRouter.get('/category/add', appController.categoryAddGet);
appRouter.get('/item/add', appController.itemAddGet);
appRouter.post('/category/add', appController.categoryAddPost);
appRouter.post('/item/add', appController.itemAddPost);

module.exports = appRouter;