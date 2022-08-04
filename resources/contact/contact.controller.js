import { contactEmail } from "../../server.js";

export const sendEmail = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Form submission",
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (err) =>
    err ? res.json({ status: "Error" }) : res.json({ status: "Message Sent" })
  );
};
