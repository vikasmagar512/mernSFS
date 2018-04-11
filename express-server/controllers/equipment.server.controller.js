// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Equipment from '../models/equipment.server.model';

export const getEquipments = (req,res) => {
    Equipment.find().exec((err,Equipments) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Devices fetched successfully',Equipments});
  });
}
export const getEquipment= (req,res) => {
    Equipment.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Equipment fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Equipment with the given id not found'});
    }
  })
}
export const getEquipmentByAssetId= (req,res) => {
    Equipment.find({asset_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Equipment fetched by asset_id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Equipment with the given asset_id not found'});
    }
  })
}