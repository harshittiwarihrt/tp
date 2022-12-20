
var htEmail = 'harshittiwarirt@gmail.com'

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smitsuthar7@gmail.com',
    pass: 'ezrtuhxvjgesmlje'
  }
});

var mailOptions = {
  from: 'smitsuthar7@gmail.com',
  to: `${htEmail}`,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});