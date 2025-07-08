import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SERVER_USER,
    to: process.env.EMAIL_TO,
    subject: `
    New Member (${data.name}) Joining the Sales Boost `,
    html: `
      <h1>New Contact Form Submission</h1>    
      <p><strong>Message:</strong></p>
      <p>Asking for joining the sales boost</p>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>affiliate type:</strong> ${data.affiliateType}</p>
      <p><strong>affiliate name:</strong> ${data.affiliateName}</p>

    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
