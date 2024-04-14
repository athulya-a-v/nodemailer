const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'avathulyaajayan@gmail.com', 
        pass: 'avathulya##malu' 
    }
});


const mailOptions = {
    from: 'avathulyaajayan@gmail.com', 
    to: 'athulyakkss@gmail.com', 
    subject: 'Test Email', 
    text: 'This is a test email sent from nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
