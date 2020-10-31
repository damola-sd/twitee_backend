const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const secret = require("../../config/secret");
var smtpTransport = require("nodemailer-smtp-transport");

const logo =
  "https://res.cloudinary.com/niyon/image/upload/v1567491149/Group_2_3_pezgbf.png";

async function welcomeMail(frontend, name, email) {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Twitee",
      link: `${frontend}`,
      logo,
    },
  });
  const mail = {
    body: {
      name,
      intro: "Welcome to Twitee",
      action: {
        instructions: "Click the button below to see the most popular twits",
        button: {
          color: "#DC4D2F",
          text: "Visit us",
          link: `${frontend}`,
        },
      },
      outro: "This is a test message",
    },
  };

  const emailBody = mailGenerator.generate(mail);

  const emailText = mailGenerator.generatePlaintext(mail);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: secret.USER_MAIL,
      pass: secret.PASSWORD_MAIL,
    },
  });

  const mailOption = {
    from: "zpclone@gmail.com",
    to: email,
    subject: "Welcome to Twitee",
    html: emailBody,
    text: emailText,
  };

  try {
    const welMail = await transporter.sendMail(mailOption);
    return welMail;
    
  } catch (error) {
    return error.message;
  }
}

module.exports = welcomeMail;
