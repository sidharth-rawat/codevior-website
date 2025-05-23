import { useMutation } from '@tanstack/react-query';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  cc?: string;
  bcc?: string;
  attachments?: unknown[];
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await fetch('http://15.206.179.104/api/send-email', {
    method: 'POST',
    
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit form');
  }

  return response.json();
};

export const useContactMutation = () => {
  return useMutation<ContactResponse, Error, ContactFormData>({
    mutationFn: submitContactForm,
  });
}; 