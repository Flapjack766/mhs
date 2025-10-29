import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_PafiSWwH_KTGR11adET5wxXFPQJQBGCLJ');

// Generate unique ticket number
function generateTicketNumber(): string {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `ST-${timestamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Generate unique ticket number
    const ticketNumber = generateTicketNumber();

    // Create HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #8B4513;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #8B4513;
            margin-bottom: 10px;
          }
          .ticket-number {
            background-color: #8B4513;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 20px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 6px;
            border-left: 4px solid #8B4513;
          }
          .field-label {
            font-weight: bold;
            color: #8B4513;
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
          }
          .field-value {
            color: #333;
            font-size: 16px;
          }
          .whatsapp-btn {
            display: inline-block;
            background-color: #25D366;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin-left: 10px;
            transition: background-color 0.3s;
          }
          .whatsapp-btn:hover {
            background-color: #128C7E;
          }
          .phone-container {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .message-field {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 6px;
            min-height: 100px;
            white-space: pre-wrap;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .contact-info {
            background-color: #f0f0f0;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">سماقيه للأخشاب | Sammakieh Timbers</div>
            <div class="ticket-number">Ticket #${ticketNumber}</div>
            <h1 style="color: #8B4513; margin: 0;">New Contact Form Submission</h1>
          </div>

          <div class="field">
            <div class="field-label">First Name</div>
            <div class="field-value">${firstName}</div>
          </div>

          <div class="field">
            <div class="field-label">Last Name</div>
            <div class="field-value">${lastName}</div>
          </div>

          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${email}</div>
          </div>

          <div class="field">
            <div class="field-label">Phone</div>
            <div class="phone-container">
              <div class="field-value">${phone}</div>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="whatsapp-btn" target="_blank">
                📱 Open WhatsApp Chat
              </a>
            </div>
          </div>

          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-field">${message}</div>
          </div>

          <div class="contact-info">
            <strong>Contact Information:</strong><br>
            Email: info@mhstimber.com<br>
            Phone: +966 55 776 0117<br>
            Address: 31 Al Islam Street, Al Hamra
          </div>

          <div class="footer">
            <p>This email was sent from the contact form on the Sammakieh Timbers website.</p>
            <p>&copy; 2025 سماقيه للأخشاب. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Customer welcome email template
    const customerEmailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #8B4513;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #8B4513;
            margin-bottom: 10px;
          }
          .ticket-number {
            background-color: #8B4513;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: bold;
            display: inline-block;
            margin: 20px 0;
            font-size: 18px;
          }
          .greeting {
            font-size: 20px;
            color: #8B4513;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
            border-left: 4px solid #8B4513;
          }
          .contact-info {
            background-color: #8B4513;
            color: white;
            padding: 25px;
            border-radius: 6px;
            margin: 30px 0;
          }
          .contact-info h3 {
            margin-top: 0;
            font-size: 20px;
            margin-bottom: 15px;
          }
          .contact-item {
            display: flex;
            align-items: center;
            margin: 12px 0;
            font-size: 16px;
          }
          .contact-item svg {
            margin-right: 10px;
            flex-shrink: 0;
          }
          .whatsapp-btn {
            display: inline-block;
            background-color: #25D366;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin: 10px 5px;
            transition: background-color 0.3s;
          }
          .email-btn {
            display: inline-block;
            background-color: #0066cc;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin: 10px 5px;
            transition: background-color 0.3s;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .divider {
            height: 2px;
            background: linear-gradient(to right, transparent, #8B4513, transparent);
            margin: 30px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">سماقيه للأخشاب | Sammakieh Timbers</div>
            <h1 style="color: #8B4513; margin: 10px 0;">Thank You for Contacting Us!</h1>
            <p style="color: #666; margin: 0;">شكراً لتواصلك معنا</p>
          </div>

          <div class="greeting">
            Dear ${firstName} ${lastName},
          </div>

          <div class="content">
            <p style="margin-top: 0;">Thank you for reaching out to Sammakieh Timbers. We have successfully received your message and our team will review it shortly.</p>
            <p style="margin-bottom: 0;">Your inquiry is important to us, and we aim to respond within 24 hours during business days.</p>
          </div>

          <div style="text-align: center;">
            <div class="ticket-number">
              Ticket #${ticketNumber}
            </div>
            <p style="color: #666;">Please keep this ticket number for your reference</p>
          </div>

          <div class="divider"></div>

          <div class="contact-info">
            <h3>📞 Contact Information | معلومات التواصل</h3>
            
            <div class="contact-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>info@mhstimber.com</span>
            </div>

            <div class="contact-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+966 55 776 0117</span>
            </div>

            <div class="contact-item">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <span>31 Al Islam Street, Al Hamra</span>
            </div>

            <div style="text-align: center; margin-top: 20px;">
              <a href="https://wa.me/966557760117" class="whatsapp-btn" style="color: white;">
                💬 WhatsApp
              </a>
              <a href="mailto:info@mhstimber.com" class="email-btn" style="color: white;">
                ✉️ Email Us
              </a>
            </div>
          </div>

          <div class="divider"></div>

          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 6px; text-align: center;">
            <h3 style="color: #8B4513; margin-top: 0;">Business Hours | ساعات العمل</h3>
            <p style="margin: 5px 0;">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
            <p style="margin: 5px 0;">Friday: 2:00 PM - 6:00 PM</p>
            <p style="margin: 5px 0;">Saturday: Closed</p>
          </div>

          <div class="footer">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
            <p style="margin-top: 15px;">&copy; 2025 سماقيه للأخشاب | Sammakieh Timbers. All rights reserved.</p>
            <p style="color: #999; font-size: 12px; margin-top: 10px;">Leading timber supplier in Saudi Arabia</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'info@mhstimber.com',
      to: ['info@mhstimber.com'],
      subject: `New Contact Form Submission - Ticket #${ticketNumber}`,
      html: htmlTemplate,
    });

    if (adminError) {
      console.error('Resend error (admin):', adminError);
      return NextResponse.json(
        { error: 'Failed to send admin email' },
        { status: 500 }
      );
    }

    // Send welcome email to customer
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'info@mhstimber.com',
      to: [email],
      subject: `Thank you for contacting Sammakieh Timbers - Ticket #${ticketNumber}`,
      html: customerEmailTemplate,
    });

    if (customerError) {
      console.error('Resend error (customer):', customerError);
      // Don't fail the request if customer email fails
      // Admin email was already sent successfully
    }

    return NextResponse.json({
      success: true,
      ticketNumber: ticketNumber,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
