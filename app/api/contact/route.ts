import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

// Add CORS headers
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Add CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers }
      );
    }

    // Create transporter with flexible configuration
    let transporter;
    
    if (process.env.EMAIL_SERVICE === 'gmail') {
      // Gmail configuration
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else if (process.env.EMAIL_SERVICE === 'outlook') {
      // Outlook configuration
      transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else if (process.env.EMAIL_HOST) {
      // Custom SMTP configuration
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      // Default to Gmail if no configuration is provided
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'softerio.org@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password',
        },
      });
    }

    // Email content for admin notification
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.CONTACT_EMAIL || 'softerio.org@gmail.com',
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14b8a6 0%, #0891b2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">${process.env.COMPANY_NAME || 'Softerio Solutions'}</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #333;">Contact Form Submission</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border-left: 4px solid #14b8a6; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background: #14b8a6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                Reply to ${name}
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © ${new Date().getFullYear()} ${process.env.COMPANY_NAME || 'Softerio Solutions'}. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Send email to admin
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'softerio.org@gmail.com',
      to: email,
      subject: `Thank you for contacting ${process.env.COMPANY_NAME || 'Softerio Solutions'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14b8a6 0%, #0891b2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">${process.env.COMPANY_NAME || 'Softerio Solutions'}</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Superior IT Solutions</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #333;">Thank you for reaching out, ${name}!</h2>
            
            <p style="color: #666; line-height: 1.6;">
              We've received your message and appreciate you taking the time to contact us. 
              Our team will review your inquiry and get back to you within 24 hours.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
              <p style="color: #666; font-style: italic;">"${message}"</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to explore our services or follow us on social media 
              for the latest updates on our projects and industry insights.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://softeriosolutions.com" style="background: #14b8a6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © ${new Date().getFullYear()} ${process.env.COMPANY_NAME || 'Softerio Solutions'}. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500, headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }}
    );
  }
}