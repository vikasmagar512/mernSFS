// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as assetController from '../controllers/asset.server.controller';
import * as CustomerController from "../controllers/customer.server.controller";

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(assetController.getAssets)
     // .post(assetController.addTodo)
     // .put(assetController.updateTodo);

router.route('/:id')
      .get(assetController.getAsset)
      // .delete(assetController.deleteTodo);

router.route('/assetId/:id')
    .get(assetController.getAssetByAssetId)
export default router;
