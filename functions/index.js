const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;
const app = express(); 






/**
 * Applies the body Parser middleware by default to the routes
 * 
 * You can swap this out with whatever you want
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/sendMessage', function(req, res){
console.log('Sending Email');
    var name = req.body.name ? req.body.name : 'Portfolio';
    var message = req.body.message;
    var subject = 'Message From Portfolio';
    var appPass = 'wqtgvaoopvtavrae';
    var appEmail = 'yarteyd@gmail.com';

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let account = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: appEmail, // generated ethereal user
            pass: appPass // generated ethereal password
          }
        });
      
        // setup email data with unicode symbols
        let mailOptions = {
          from: name + '" " <@example.com>', // sender address
          to: "bar@example.com, yarteyd@gmail.com", // list of receivers
          subject: subject, // Subject line
          text: message, // plain text body
        //   html: "<b>Hello world?</b>" // html body
        };
      
        // send mail with defined transport object
        let info =  transporter.sendMail(mailOptions)
      
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      
      

});


app.listen(PORT, function () {
    console.log('now listening on port ' + PORT);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);