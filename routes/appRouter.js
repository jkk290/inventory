const { Router } = require('express');
const appController = require('../controllers/appController');

const appRouter = Router();

appRouter.get('/', appController.itemsListGet);

module.exports = appRouter;