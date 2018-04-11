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
