// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as AccessoryController from '../controllers/accessories.server.controller';

// get an instance of express router
const router = express.Router();


router.route('/')
    .get(AccessoryController.getAccessories)

router.route('/:id')
    .get(AccessoryController.getAccessory)

router.route('/accessoryNo/:id')
    .get(AccessoryController.getAccessoryById)

export default router;
