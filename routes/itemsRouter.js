const { Router } = require('express');
const itemsController = require('../controllers/itemsController');

const appRouter = Router();

appRouter.get('/', itemsController.itemsListGet);
appRouter.get('/item/add', itemsController.itemAddGet);
appRouter.get('/item/:id/edit', itemsController.itemEditGet);
appRouter.post('/item/add', itemsController.itemAddPost);
appRouter.post('/item/:id/edit', itemsController.itemEditPost);
appRouter.post('/item/:id/delete', itemsController.itemDeletePost);

module.exports = appRouter;