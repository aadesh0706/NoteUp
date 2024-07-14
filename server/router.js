const express = require('express');
const Router = express.Router();
const sqlconnect = require('./dbconnect');

Router.get("/",(req,res)=>{
   // const data = [{name:"Aadesh",email:"aadeshgulumbe3@gmail.com"},
   //    {name:"Aadesh",email:"aadeshgulumbe3@gmail.com"}
   // ]; 
   // console.log(data);
   // res.send(data);

   sqlconnect.query("select * from noteup",(err,rows)=>{
      if(!err){
         res.send(rows);
         console.log(rows);
               }else{
         res.send(err);
      }
   });

});

Router.post("/notesubmit",(req,res)=>{
   const name = req.body.name;
   const description = req.body.description;
   
   const dateObj = new Date();
   const month = dateObj.getUTCMonth() + 1; // months from 1-12
   const day = dateObj.getUTCDate();
   const year = dateObj.getUTCFullYear();
   const fulldate = year + "-" + month + "-" + day;

   const qry = `INSERT INTO noteup (notename, description, date) VALUES ('${name}', '${description}', '${fulldate}')`;
   sqlconnect.query(qry,(err,result)=>{
      if (!err) {
         console.log("Note Submitted");
         res.status(200).json("Note Submitted");
      } else {
         console.log("Something went wrong");
      }
   });
});

Router.get("/noteshow",(req,res)=>{
      sqlconnect.query("select * from noteup",(err,rows)=>{
      if(!err){
         res.send(rows);
         console.log(rows);
         console.log("Hello");
               }else{
         res.send(err);
      }
   });
});



module.exports=Router;