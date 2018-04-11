// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as StockDetailController from '../controllers/stockDetails.server.controller';

// get an instance of express router
const router = express.Router();


router.route('/')
    .get(StockDetailController.getStockDetails)

router.route('/vendorNo/:id')
    .get(StockDetailController.getStockDetailByVendorNo)

router.route('/accessoryId/:id')
    .get(StockDetailController.getStockDetailByAccessoryId)

export default router;
