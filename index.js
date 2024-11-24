const express=require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/Services',(req,res)=>{
    res.render('Services')
})

app.get('/Contact',(req,res)=>{
    res.render('contact')
})

app.get('/Apply',(req,res)=>{
    res.render('apply')
})

app.use(express.urlencoded({extended:true}))

app.post('/sucess',(req,res)=>{
    let response={
        username:req.body.name,
        password:req.body.password,
        mobile_number:req.body.number,
        Applying_reason:req.body.role,
        resume:req.body.file
    }
    console.log(response);
    res.render('sucess');
    console.log("Someone is Applied");

})
app.listen(8080,()=>console.log("server is listening"))
