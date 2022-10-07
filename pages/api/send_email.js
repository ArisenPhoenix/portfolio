import { SMTPClient } from "emailjs";

const SEND_ME_EMAIL_HANDLER = (req, res) => {
  const data = req.body;
  // console.log("DATA: ", data);
  const client = new SMTPClient({
    user: process.env.BUSINESS_EMAIL,
    password: process.env.BUSINESS_EMAIL_PASSWORD,
    host: "smtp-relay.gmail.com",
    ssl: true,
    port: 465,
  });

  try {
    client.sendAsync({
      text: data.message,
      from: data.userEmail,
      to: process.env.BUSINESS_EMAIL,
      subject: data.subject,
    });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(400).end(JSON.stringify({ err: err }));
  }
  // console.log("SUCCESSFULLY SUBMITTED TO EMAIL");
  res.status(200).end(JSON.stringify({ message: "Email Successfully Sent" }));
};

export default SEND_ME_EMAIL_HANDLER;
