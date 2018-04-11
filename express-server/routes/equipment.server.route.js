// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as equipmentController from '../controllers/equipment.server.controller';
// import * as CustomerController from "../controllers/customer.server.controller";

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(equipmentController.getEquipments)
     // .post(equipmentController.addTodo)
     // .put(equipmentController.updateTodo);

router.route('/:id')
      .get(equipmentController.getEquipment)
      // .delete(equipmentController.deleteTodo);

router.route('/assetId/:id')
    .get(equipmentController.getEquipmentByAssetId)
export default router;
