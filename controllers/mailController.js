const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendMail = async (req, res) => {
  const {to, subject, message} = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Email Error:", error);
    res.send("Error sending email: " + error.message);
  }
};
