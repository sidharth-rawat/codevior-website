import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Mock function to simulate sending an email or storing contact data
async function processContactForm(data: ContactFormData) {
  // In a real application, this would send an email, store in a database, etc.
  console.log('Processing contact form data:', data);
  
  // Simulate a slight delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demo purposes, we'll return success most of the time
  // But occasionally fail to show error handling
  const shouldFail = Math.random() < 0.1; // 10% chance to fail
  
  if (shouldFail) {
    throw new Error('Failed to submit contact form');
  }
  
  return { success: true };
}

export async function POST(request: Request) {
  try {
    // Get the form data from the request body
    const formData = await request.json();
    
    // Validate the data
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      }, { status: 400 });
    }
    
    // Process the contact form data (this would typically send an email or store in a database)
    await processContactForm(formData);
    
    // Return a success response
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return an error response
    return NextResponse.json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'An unexpected error occurred' 
    }, { status: 500 });
  }
} 