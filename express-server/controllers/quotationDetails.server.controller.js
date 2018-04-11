// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import quotationDetails from '../models/quotation.server.model';
import * as QuotationDetailController from "./quotationDetails.server.controller";

export const getQuotations = (req,res) => {
    quotationDetails.find().exec((err,quotationDetails) => {
    console.log(`quotationDetail ${quotationDetails}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'quotationDetails fetched successfully',quotationDetails});
  });
}

export const getQuotation = (req,res) => {
    quotationDetails.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'quotationDetails fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Vendor with the given id not found'});
    }
  })
}
export const getQuotationDetailByDocumentID = (req,res) => {
    quotationDetails.find({document_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'quotationDetails fetched by document_id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Quotation with the given document_id not found'});
    }
  })
}
export const getQuotationDetailByCustomerNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    quotationDetails.find({customer_number:req.params.id}).exec((err,quotationDetail) => {
        console.log(`quotationDetail ${quotationDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(quotationDetail.length){
          return res.json({'success':true,'message':'quotationDetail fetched by customer id successfully',quotationDetail});
        }
        else{
          return res.json({'success':false,'message':'quotationDetail with the given customer id not found'});
        }
    })
}