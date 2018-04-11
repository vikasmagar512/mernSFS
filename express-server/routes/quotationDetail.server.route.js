// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as QuotationDetailController from '../controllers/quotationDetails.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
    .get(QuotationDetailController.getQuotations)
router.route('/:id')
    .get(QuotationDetailController.getQuotation)
router.route('/quotationID/:id')
    .get(QuotationDetailController.getQuotationDetailByDocumentID)
router.route('/customerNo/:id')
    .get(QuotationDetailController.getQuotationDetailByCustomerNo)

export default router;
