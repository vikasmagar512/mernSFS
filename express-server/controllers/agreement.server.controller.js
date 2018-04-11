// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Agreement from '../models/agreement.server.model';

export const getAgreements = (req,res) => {
    Agreement.find().exec((err,agreements) => {
    console.log(`agreements ${agreements}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Agreement fetched successfully',agreements});
  });
}
/*export const getAgreement = (req,res) => {
    Agreement.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Agreement fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Agreement with the given id not found'});
    }
  })
}*/
export const getAgreementByAgreementNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    Agreement.find({agreement_number:req.params.id}).exec((err,agreements) => {
        console.log(`agreements ${agreements}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(agreements.length){
          return res.json({'success':true,'message':'Agreement fetched by id successfully',agreements});
        }
        else{
          return res.json({'success':false,'message':'Agreement with the given id not found'});
        }
    })
}