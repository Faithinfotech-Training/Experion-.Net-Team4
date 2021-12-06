const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());

app.post('/mail', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')

    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let mail = req.body.Email;
    let path = req.body.Path;
    let name = req.body.PatientName
    var transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'angular.team4@gmail.com',
            pass: 'experion123'
        },

        secure: true

    });
    
        var mailOptions = {

            attachments: [
                {  
                  // filename and content type is derived from path
                  path: path
                },],

            from: 'angular.team4@gmail.com',

            to:mail,

            subject: 'Report Ready',

            text: `${name},

            Your Test Report Has been Generated. The Pdf is Attached to this mail.`
        }   


    transporter.sendMail(mailOptions, async function (error, info) {

        if (error) {

            console.log(error);

            res.end();

        } else {

            res.send('Email sent: ' + info.response);

        }

    });

})

app.listen(5000, () => { console.log("server ready at 5000") });