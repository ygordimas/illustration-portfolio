import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  //   const { name, email, message } = await request.json()

  //   //do some testing

  //   const data = {
  //     name,
  //     email,
  //     message,
  //   };

  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.USER,
      to: "ikyste@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `<p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }

  //   try {
  //     const mail = await transporter.sendMail({
  //       from: process.env.USER,
  //       to: "ikyste@gmail.com",
  //       replyTo: email,
  //       subject: `Contact form submission from ${name}`,
  //       html: `<p>Name: ${name}</p>
  //       <p>Email: ${email}</p>
  //       <p>Message: ${message}</p>`,
  //     });

  //     console.log("Message sent:", mail.messageId);

  //     return res.status(200).json({ message: "success" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({
  //       message: "Could not send the email. Your message was not sent.",
  //     });
  //   }
}
