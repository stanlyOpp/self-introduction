
const fs = require('fs')
const data = "\nhellow world"

function WritemailAndmessage(email,message){
    const dataEmail_Message = `\n\n email : ${email} \n message : ${message}`
    fs.appendFile('./data_pool/mail_pool.txt',dataEmail_Message,(error) =>{
        if(error) throw err;
        console.log('File written succressfully!')
    })
}


module.exports = WritemailAndmessage;