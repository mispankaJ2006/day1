let express = require("express")
let app = express()
app.get('/home',(req,res)=>{
    res.send("this is too much")
})
app.listen(5000)