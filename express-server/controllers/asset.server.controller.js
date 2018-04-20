// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Asset from '../models/asset.server.model';

export const getAssets = (req,res) => {
    Asset.find().exec((err,Assets) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Devices fetched successfully',Assets});
  });
}
export const getAsset= (req,res) => {
    Asset.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Asset fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Asset with the given id not found'});
    }
  })
}
export const getAssetByAssetId= (req,res) => {
    Asset.find({asset_id:req.params.id}).exec((err,assets) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(assets.length){
      return res.json({'success':true,'message':'Asset fetched by asset_id successfully',assets});
    }
    else{
      return res.json({'success':false,'message':'Asset with the given asset_id not found'});
    }
  })
}