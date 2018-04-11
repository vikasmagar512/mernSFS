// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Vendor from '../models/vendor.server.model';

export const getVendors= (req,res) => {
    Vendor.find().exec((err,vendors) => {
    console.log(`vendor ${vendors}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Vendor fetched successfully',vendors});
  });
}

/*export const getVendor = (req,res) => {
    Vendor.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Vendor fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Vendor with the given id not found'});
    }
  })
}*/
export const getVendorByVendorNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    Vendor.find({vendor_number:req.params.id}).exec((err,vendor) => {
        console.log(`vendor ${vendor}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(vendor.length){
          return res.json({'success':true,'message':'Vendor fetched by id successfully',vendor});
        }
        else{
          return res.json({'success':false,'message':'Vendor with the given id not found'});
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
