# Email Setup Guide for Softerio Solutions

## Overview
This project uses Nodemailer to send contact form submissions to `softerio.org@gmail.com`. The system is configured to work with multiple email services.

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

### Option 1: Gmail (Recommended for testing)
```bash
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_SERVICE=gmail
CONTACT_EMAIL=softerio.org@gmail.com
COMPANY_NAME=Softerio Solutions
```

**Important for Gmail:** You need to use an "App Password", not your regular Gmail password.

### Option 2: Outlook/Office365
```bash
# Email Configuration
EMAIL_USER=your-outlook@outlook.com
EMAIL_PASS=your-outlook-password
EMAIL_SERVICE=outlook
CONTACT_EMAIL=softerio.org@gmail.com
COMPANY_NAME=Softerio Solutions
```

### Option 3: Custom SMTP Server
```bash
# Email Configuration
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
EMAIL_SECURE=false
CONTACT_EMAIL=softerio.org@gmail.com
COMPANY_NAME=Softerio Solutions
```

## How to Get Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords
5. Generate a new app password for "Mail"
6. Use this generated password in your `EMAIL_PASS` variable

## Testing the Setup

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out the contact form
4. Click "Send Message"
5. Check both:
   - Your email (softerio.org@gmail.com) for the notification
   - The sender's email for the auto-reply

## Features

- ✅ Sends contact form submissions to softerio.org@gmail.com
- ✅ Sends auto-reply to the person who submitted the form
- ✅ Professional email templates with Softerio Solutions branding
- ✅ Flexible email service configuration
- ✅ Error handling and validation
- ✅ No UI changes required

## Troubleshooting

- **"Failed to send email" error**: Check your environment variables and email service credentials
- **Gmail authentication failed**: Make sure you're using an App Password, not your regular password
- **Emails not received**: Check spam folder and verify email addresses

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords for Gmail instead of regular passwords
- Consider using environment-specific email services for production
