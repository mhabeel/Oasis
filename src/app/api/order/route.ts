import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // If SMTP isn’t configured, log and return OK (dev-friendly)
    if (!process.env.SMTP_HOST) {
      console.log("[ORDER]", { name, email, message });
      return NextResponse.json({ ok: true });
    }

    // Optional: Nodemailer (install first: npm i nodemailer)
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER!,
      to: process.env.MAIL_TO || process.env.SMTP_USER!,
      subject: `New Oasis order from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
