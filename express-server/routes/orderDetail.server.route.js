// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as OrderDetailController from '../controllers/orderDetails.server.controller';

// get an instance of express router
const router = express.Router();


router.route('/')
    .get(OrderDetailController.getOrders)

router.route('/:id')
    .get(OrderDetailController.getOrder)

router.route('/poNo/:id')
    .get(OrderDetailController.getOrderDetailByPONo)

router.route('/vendorNo/:id')
    .get(OrderDetailController.getOrderDetailByVendorNo)
router.route('/customerNo/:id')
    .get(OrderDetailController.getOrderDetailByCustomerNo)
router.route('/accessoryId/:id')
    .get(OrderDetailController.getOrderDetailByAccessoryId)

export default router;
