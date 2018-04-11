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
    Asset.find({asset_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Asset fetched by asset_id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Asset with the given asset_id not found'});
    }
  })
}
/*

export const deleteTodo = (req,res) => {
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':todo.todoText+' deleted successfully'});
  })
}


export const addTodo = (req,res) => {
    console.log(req.body);
    const newTodo = new Todo(req.body);
    newTodo.save((err,todo) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }

        return res.json({'success':true,'message':'Todo added successfully',todo});
    })
}

export const updateTodo = (req,res) => {
    Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
        if(err){
            return res.json({'success':false,'message':'Some Error','error':err});
        }
        console.log(todo);
        return res.json({'success':true,'message':'Updated successfully',todo});
    })
}
*/
