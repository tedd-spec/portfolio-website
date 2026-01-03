import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

// Ensure this route runs in the Node runtime (nodemailer requires Node APIs)
export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body || {}

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      EMAIL_TO,
      EMAIL_FROM,
    } = process.env as Record<string, string | undefined>

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
      return NextResponse.json({ message: 'Email server not configured' }, { status: 500 })
    }

    const port = Number(SMTP_PORT)
    const secure = port === 465

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const mailOptions = {
      from: EMAIL_FROM || SMTP_USER,
      to: EMAIL_TO,
      subject: `Website contact — ${subject}`,
      text: `New message from ${name} <${email}>:\n\n${message}`,
      html: `
        <p>New message from <strong>${name}</strong> &lt;${email}&gt;.</p>
        <h4>Subject</h4>
        <p>${subject}</p>
        <h4>Message</h4>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true, message: 'Message sent' })
  } catch (err: any) {
    console.error('Mail error', err)
    return NextResponse.json({ message: err?.message || 'Internal Server Error' }, { status: 500 })
  }
}
