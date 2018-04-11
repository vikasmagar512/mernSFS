// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as RentalController from '../controllers/rental.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(RentalController.getRentals)
     // .post(deviceController.addTodo)
     // .put(deviceController.updateTodo);
/*
router.route('/:id')
      .get(AgreementController.getAgreement)
      // .delete(deviceController.deleteTodo);*/
router.route('/agreementNo/:id')
      .get(RentalController.getRentalByAgreementNo)
      // .delete(deviceController.deleteTodo);


export default router;
