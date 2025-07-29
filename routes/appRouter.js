const { Router } = require('express');
const appController = require('../controllers/appController');

const appRouter = Router();

appRouter.get('/', appController.itemsListGet);
appRouter.get('/item/add', appController.itemAddGet);
appRouter.post('/item/add', appController.itemAddPost);

module.exports = appRouter;