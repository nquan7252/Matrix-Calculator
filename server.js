var express=require('express')
var path=require('path')
var app=express();
const PORT=process.env.PORT||3000;  
app.use(express.static(path.join(__dirname,'build')))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})
app.listen(PORT)