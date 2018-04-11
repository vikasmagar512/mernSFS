// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as CustomerController from '../controllers/customer.server.controller';
import * as RentalController from "../controllers/rental.server.controller";

// get an instance of express router
const router = express.Router();

router.route('/')
    .get(CustomerController.getCustomers)
// .post(CustomerController.addTodo)
// .put(CustomerController.updateTodo);
/*
router.route('/:id')
      .get(CustomerController.getAgreement)
      // .delete(CustomerController.deleteTodo);*/
router.route('/customerNo/:id')
    .get(CustomerController.getCustomerByCustomerNo)
    // .delete(CustomerController.deleteTodo);

export default router;
