const express = require('express')
const bodyPaser = require('body-parser')
const app = express()
const port = 4459
const cors = require('cors')
const WritemailAndmessage = require('./function/mailpool')
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended:true}))
app.use(cors())

app.post('/submit-form',(req,res) =>{
    const email = req.body.Email;
    const message = req.body.Message;
    console.log(email)
    console.log(message)
    WritemailAndmessage(email,message)
    res.send('Form submitted successfully!')

})

app.listen(port,() =>{
    console.log("sever running at port :" ,port)
})
