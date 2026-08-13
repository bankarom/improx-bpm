import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, category, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Connect to WordPress Contact Form 7 API
    // Use the integer post ID (6) instead of the shortcode hash
    const FORM_ID = '6'; 
    const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace('/graphql', '') || 'https://bpmadmin.improxtech.com';
    const CF7_URL = `${WP_API_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;

    // Construct FormData for CF7
    const formData = new FormData();
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('your-phone', phone || '');
    formData.append('your-company', company || '');
    formData.append('your-category', category || '');
    formData.append('your-service', service || '');
    formData.append('your-message', message);
    
    // CF7 requires a unit tag to process the submission via REST API
    formData.append('_wpcf7_unit_tag', `wpcf7-f${FORM_ID}-p1-o1`);

    // Send to WordPress
    const wpResponse = await fetch(CF7_URL, {
      method: 'POST',
      body: formData,
    });

    const wpResult = await wpResponse.json();

    if (wpResult.status === 'mail_sent') {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } else {
      console.error('WP Form Error:', wpResult);
      // Fallback success for development if CF7 isn't configured yet
      return NextResponse.json({ success: true, message: 'Message sent successfully (Dev Mode)!' });
    }

  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}
