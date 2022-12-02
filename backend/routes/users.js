var express = require('express');
var router = express.Router();
const db =require('../dao/database')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sqlStr='select * from user '
  db.query(sqlStr,(err,result)=>{
    if (err){
      res.send(console.log(err.message))
    }
    else {
      res.send(result)
    }
  })

});

router.post('/', function(req, res, next) {
  const data =req.body
  console.log(data)
  const zhi=data.data
  console.log("ok")
  const sqlStr='update user set ?'
  const target={name:zhi.name,biography:zhi.biography}
  db.query(sqlStr,target,(err,result)=>{
    if (err){
      res.send(console.log(err.message))
    }
    else {
      res.send(result)
    }
  })

});
module.exports = router;
