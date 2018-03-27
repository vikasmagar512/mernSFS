// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as deviceController from '../controllers/device.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(deviceController.getDevices)
     // .post(deviceController.addTodo)
     // .put(deviceController.updateTodo);

router.route('/:id')
      .get(deviceController.getDevice)
      // .delete(deviceController.deleteTodo);


export default router;
