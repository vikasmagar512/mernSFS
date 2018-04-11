// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import accessory from '../models/accessory.server.model';

export const getAccessories = (req,res) => {
    accessory.find().exec((err,accessories) => {
    console.log(`orderDetail ${accessories}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'accessories fetched successfully',accessories});
  });
}

export const getAccessory = (req,res) => {
    accessory.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'accessory fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'accessory with the given id not found'});
    }
  })
}
export const getAccessoryById = (req,res) => {
    accessory.find({accessory_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'accessory fetched by po_number successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'accessory with the given po_number not found'});
    }
  })
}