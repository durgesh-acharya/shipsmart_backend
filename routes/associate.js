const express = require('express');
const router = express.Router();

const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());



//fetch all associate
router.get('/associate', function(req, res, next) {

    const sql = "SELECT * FROM associate";
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.setHeader('Content-Type', 'application/json');
      res.json([{status : true, data : rows, msg : "Associate retrived successfully!"}])
    })
  });

  // fetch individual channel partner (from id)
  router.get('/associatebyid/:id', function(req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM associate WHERE ass_id=${id}`;
    db.query(sql, function(err, row, fields) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      } if(row.length > 0){
        res.json([{status : true, 'data' : row[0], msg : "Associate retrived successfully through id!"}])
      }else{
        res.json([{status : false, msg : "No Associate found"}])
      }
     
    })
  });

    // fetch individual channel partner (from pincode)
    router.get('/associatebypincode/:pincode', function(req, res, next) {
      const pincode = req.params.pincode;
      const sql = `SELECT * FROM associate WHERE ass_pincode=${pincode}`;
      db.query(sql, function(err, row, fields) {
        if(err) {
          res.status(500).send({ error: 'Something failed!' })
        } if(row.length > 0){
          res.json([{status : true, 'data' : row[0], msg : "Associate retrived successfully through id!"}])
        }else{
          res.json([{status : false, msg : "No Associate found"}])
        }
       
      })
    });

 

// auth channel partner (from mobile and password)
router.get('/associate/auth/:mobiles/:passwords/:active', function(req, res, next) {
  const mobile = req.params.mobiles;
  const password = req.params.passwords;
  const activestts = req.params.active;

  const sql = "SELECT * FROM associate WHERE ass_mobile = ? AND ass_pin = ? AND ass_active = ?";
  db.query(sql,[mobile,password,activestts], function(err, row, fields) {
    if(err) {
      console.log(err);
      res.status(500).send({ error: 'Something failed!' })
    } if(row.length > 0){
      res.json([{status : true, data : row[0], msg : "Associate retrived successfully through id!"}])
    }else{
      res.json([{status : false, msg : "No Associate found"}])
    }
      
  })
});



  module.exports = router;