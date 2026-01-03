#!/usr/bin/env node
/*
  Simple test script to send an email using the project's SMTP env vars.
  If SMTP_* vars are missing it falls back to Ethereal (nodemailer test account)

  Usage:
    # with env configured
    SMTP_HOST=smtp.example.com SMTP_PORT=587 SMTP_USER=user SMTP_PASS=pass EMAIL_TO=you@example.com node scripts/send-test-email.js

    # or, just run without env and the script will use a test Ethereal inbox
    node scripts/send-test-email.js
*/

const nodemailer = require('nodemailer')

async function main() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO, EMAIL_FROM } = process.env

  let transporter
  let from
  let to = EMAIL_TO

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log('No SMTP config detected — creating Ethereal test account...')
    const testAccount = await nodemailer.createTestAccount()
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: { user: testAccount.user, pass: testAccount.pass },
    })
    from = testAccount.user
    to = to || testAccount.user
  } else {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
    from = EMAIL_FROM || SMTP_USER
    to = to || SMTP_USER
  }

  console.log(`Sending test email from: ${from}  to: ${to}`)

  const info = await transporter.sendMail({
    from,
    to,
    subject: 'Portfolio site — test email',
    text: 'This is a test email from the portfolio website contact setup.',
    html: '<p>This is a <strong>test email</strong> from the portfolio website contact setup.</p>',
  })

  console.log('Message sent:', info.messageId)

  // If Ethereal was used, show the preview URL
  try {
    const preview = nodemailer.getTestMessageUrl(info)
    if (preview) console.log('Preview URL:', preview)
  } catch (err) {
    // ignore
  }
}

main().catch((err) => {
  console.error('Test send failed:', err)
  process.exit(1)
})
