// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Rental from '../models/rental.server.model';

export const getRentals = (req,res) => {
    Rental.find().exec((err,rentals) => {
    console.log(`rental ${rentals}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Rental fetched successfully',rentals});
  });
}
/*export const getRental = (req,res) => {
    Rental.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Rental fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Rental with the given id not found'});
    }
  })
}*/
export const getRentalByAgreementNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    Rental.find({agreement_number:req.params.id}).exec((err,rental) => {
        console.log(`rental ${rental}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(rental.length){
          return res.json({'success':true,'message':'Rental fetched by id successfully',rental});
        }
        else{
          return res.json({'success':false,'message':'Rental with the given id not found'});
        }
    })
}