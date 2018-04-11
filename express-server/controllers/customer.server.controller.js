// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Customer from '../models/customer.server.model';

export const getCustomers= (req,res) => {
    Customer.find().exec((err,customers) => {
    console.log(`customer ${customers}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Customer fetched successfully',customers});
  });
}

/*export const getCustomer = (req,res) => {
    Customer.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Customer fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Customer with the given id not found'});
    }
  })
}*/
export const getCustomerByCustomerNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    Customer.find({customer_number:req.params.id}).exec((err,customer) => {
        console.log(`customer ${customer}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(customer.length){
          return res.json({'success':true,'message':'Customer fetched by id successfully',customer});
        }
        else{
          return res.json({'success':false,'message':'Customer with the given id not found'});
        }
    })
}
