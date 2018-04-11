// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import StockDetail from '../models/stockDetail.server.model';

export const getStockDetails= (req,res) => {
    StockDetail.find().exec((err,stockDetails) => {
    console.log(`stockDetail ${stockDetails}`)
    if(err){
        return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'stockDetails fetched successfully',stockDetails});
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
export const getStockDetailByVendorNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    StockDetail.find({vendor_number:req.params.id}).exec((err,stockDetail) => {
        console.log(`stockDetail ${stockDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(stockDetail.length){
          return res.json({'success':true,'message':'StockDetail fetched by vendor id successfully',stockDetail});
        }
        else{
          return res.json({'success':false,'message':'StockDetail with the given vendor id not found'});
        }
    })
}
export const getStockDetailByCustomerNo = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    StockDetail.find({customer_number:req.params.id}).exec((err,stockDetail) => {
        console.log(`stockDetail ${stockDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(stockDetail.length){
          return res.json({'success':true,'message':'StockDetail fetched by customer id successfully',stockDetail});
        }
        else{
          return res.json({'success':false,'message':'StockDetail with the given customer id not found'});
        }
    })
}
export const getStockDetailByAccessoryId = (req,res) => {
    console.log(`req.params ${req.params.id}`)
    StockDetail.find({accessory_id:req.params.id}).exec((err,stockDetail) => {
        console.log(`stockDetail ${stockDetail}`)
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(stockDetail.length){
          return res.json({'success':true,'message':'StockDetail fetched by accessory_id successfully',stockDetail});
        }
        else{
          return res.json({'success':false,'message':'StockDetail with the given accessory_id not found'});
        }
    })
}
