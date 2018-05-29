// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as VendorController from '../controllers/vendor.server.controller';

// get an instance of express router
const router = express.Router();


router.route('/')
    .get(VendorController.getVendors)
// .post(VendorController.addTodo)
// .put(VendorController.updateTodo);
router.route('/vendorNo/:id')
    .get(VendorController.getVendorByVendorNo)
    // .delete(VendorController.deleteTodo);

    // .get(VendorController.getCustomers)
export default router;
