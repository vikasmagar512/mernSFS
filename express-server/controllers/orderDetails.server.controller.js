// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import orderDetails from '../models/order.server.model';
import * as OrderDetailController from "./orderDetails.server.controller";

export const getOrders = (req,res) => {
    orderDetails.find().exec((err,orderDetails) => {
    console.log(`orderDetail ${orderDetails}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'orderDetails fetched successfully',orderDetails});
  });
}

export const getOrder = (req,res) => {
    orderDetails.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'orderDetails fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Vendor with the given id not found'});
    }
  })
}
export const getOrderDetailByPONo = (req,res) => {
    orderDetails.find({po_number:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'orderDetails fetched by po_number successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Vendor with the given po_number not found'});
    }
  })
}
export const getOrderDetailByVendorNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    orderDetails.find({vendor_number:req.params.id}).exec((err,orderDetail) => {
        console.log(`orderDetail ${orderDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(orderDetail.length){
          return res.json({'success':true,'message':'orderDetail fetched by vendor id successfully',orderDetail});
        }
        else{
          return res.json({'success':false,'message':'orderDetail with the given vendor id not found'});
        }
    })
}
export const getOrderDetailByCustomerNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    orderDetails.find({customer_number:req.params.id}).exec((err,orderDetail) => {
        console.log(`orderDetail ${orderDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(orderDetail.length){
          return res.json({'success':true,'message':'orderDetail fetched by customer id successfully',orderDetail});
        }
        else{
          return res.json({'success':false,'message':'orderDetail with the given customer id not found'});
        }
    })
}
export const getOrderDetailByAccessoryId = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    orderDetails.find({accessory_id:req.params.id}).exec((err,orderDetail) => {
        console.log(`orderDetail ${orderDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(orderDetail.length){
          return res.json({'success':true,'message':'orderDetail fetched by accessory_id successfully',orderDetail});
        }
        else{
          return res.json({'success':false,'message':'orderDetail with the given accessory_id not found'});
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
