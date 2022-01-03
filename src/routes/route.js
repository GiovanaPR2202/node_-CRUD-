const express = require('express');
const router = express.Router();
const db = require('../config/db.js')
const path = require('path')

router.get('/',(req,res)=>{
    //res.sendFile('index.html',{root: path.join(__dirname,'../public')})

    db.getConnection((err,conn)=>{
        if(err){return res.status(500).send({error: err})}
        conn.query('SELECT * FROM users',
        (err,result,field)=>{
            if(err){
                return res.status(500).send.json({
                    error:err,
                    response: null
                })
            }
            res.status(200).send({response: result})
        }
        )
    })
 })
 router.post('/user',(req,res)=>{
    db.getConnection((err,conn)=>{
        if(err){return res.status(500).send({error: err})}
        conn.query('INSERT INTO users (name,email) VALUES(?,?)',
        [req.body.name,req.body.email],
        (err,result,field)=>{
            if(err){
                return res.status(500).send({
                    error:err,
                    response: null
                })
            }
            res.status(201).send({
                message:'Usuario cadastrado com sucesso',
                id_name: result.insertId
            })
        }
        )
    })
 })
 
router.get('/:id_user',(req,res)=>{
    db.getConnection((err,conn)=>{
        if(err){return res.status(500).send({error: err})}
        conn.query('SELECT * FROM users WHERE id = ?',
        [req.params.id_user],
        (err,result,field)=>{
            if(err){
                return res.status(500).send.json({
                    error:err,
                    response: null
                })
            }
            res.status(200).send({response: result})
        }
        )
    })
})
//DELETE
router.delete('/delete/:id_user',(req,res)=>{
    db.getConnection((err,conn)=>{
        if(err){return res.status(500).send({error:err})}

        conn.query('DELETE FROM users WHERE id = ?',
        [req.params.id_user],
        (err,result,fields)=>{
            if(err){return res.status(500).send({error:err})}

            res.status(202).send({
                message: 'Usuario deletado com sucesso'
            })
        }
      
        
        )
    })
})
//PATCH 
router.patch('/',(req,res)=>{
    db.getConnection((err,conn)=>{
        if(err){return res.status(500).send({error: err})}
        conn.query('UPDATE users SET name = ?, email = ?  WHERE id = ?',
        [req.body.name,req.body.email,req.body.id_user],
        (err,result,field)=>{
            if(err){
                return res.status(500).send({
                    error:err,
                    response: null
                })
            }
            res.status(202).send({
                message:'Usuario Alterado com Sucesso!',
            })
        }
        )
    })
})






module.exports = router;