// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Charge from '../models/charges.server.model';

export const getCharges = (req,res) => {
    Charge.find().exec((err,charges) => {
    console.log(`rental ${charges}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Charge fetched successfully',charges});
  });
}
/*export const getCharge = (req,res) => {
    Charge.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Charge fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Charge with the given id not found'});
    }
  })
}*/
export const getChargeByAgreementNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    Charge.find({agreement_number:req.params.id}).exec((err,rental) => {
        console.log(`rental ${rental}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(rental.length){
          return res.json({'success':true,'message':'Charge fetched by id successfully',rental});
        }
        else{
          return res.json({'success':false,'message':'Charge with the given id not found'});
        }
    })
}