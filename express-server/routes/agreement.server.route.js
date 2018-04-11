// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as AgreementController from '../controllers/agreement.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(AgreementController.getAgreements)
     // .post(deviceController.addTodo)
     // .put(deviceController.updateTodo);
/*
router.route('/:id')
      .get(AgreementController.getAgreement)
      // .delete(deviceController.deleteTodo);*/
router.route('/agreementNo/:id')
      .get(AgreementController.getAgreementByAgreementNo)
      // .delete(deviceController.deleteTodo);


export default router;
