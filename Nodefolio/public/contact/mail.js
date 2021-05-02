const nodemailer = require("nodemailer");

function sendMail(name, email, subject, message)
{
  async function main() {
    console.log("user:", process.env.EMAIL_USERNAME);
    console.log("pass:",process.env.EMAIL_PASSWORD);
    console.log("smtp",process.env.EMAIL_SMTP);
    console.log("port",process.env.EMAIL_PORT);

    console.log("user input - name:", name);
    console.log("user input - email:", email);
    console.log("user input formatted -", name + " <" + email + ">");
    console.log("user input - subject:", subject);
    console.log("user input - message:", message);

    if (name === undefined)
    {
      name = "No Name";
      email = "nodefoliomailer@aol.com"
      subject = "no subject"
      text = "no text"
    }
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP,
      port: process.env.EMAIL_PORT,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // TODO -- insert values from form here into object and load them below

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: name + " <nodefoliomailer@aol.com>", // sender address
      //name: name,
      to: "nodefoliomailer@aol.com", // list of receivers
      subject: subject, // Subject line
      text: message + "\n\ncontact info: " + email, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
    
    main().catch(console.error);
}

module.exports = {
  sendMail
};