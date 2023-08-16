import nodeMailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export function sendEmail(to, subject, body) {
    console.log(process.env.SMTP_HOST,)
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        socketTimeout: 10000,
        connectionTimeout: 10000,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });



    return transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        html: body,
    });
}


const result = await sendEmail(process.env.MAIL_TO, "Hello", "Hello World");
console.log(result);