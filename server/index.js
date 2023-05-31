const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"",
    database:"nodejs_api",
    insecureAuth : true
})
        // select data skill
app.get('/skill',(req ,res)=>{
    db.query("SELECT * FROM `skill`",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
app.post('/skill/create',(req,res)=>{
    const title = req.body.title

    db.query("")
})

    // select data education
app.get('/education',(req,res)=>{
    db.query('SELECT * FROM `education`',(err,result)=>{
        if(err){    
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
    // select data portfolio
app.get('/portfolio',(req,res)=>{
    db.query('SELECT * FROM `portfolio`',(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen('3307',()=>{
    console.log('Server is running')
})