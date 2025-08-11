// Contact Form Handler (for future backend integration)
// This file contains the structure for handling contact form submissions

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: 'landscaping' | 'kitchen' | 'both' | 'maintenance';
  message: string;
}

export class ContactFormHandler {
  static async submitForm(data: ContactFormData): Promise<boolean> {
    // TODO: Replace with actual API endpoint when backend is implemented
    console.log('Contact form submission:', data);
    
    // Simulate API call for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  static validateForm(data: Partial<ContactFormData>): string[] {
    const errors: string[] = [];

    if (!data.firstName?.trim()) {
      errors.push('First name is required');
    }

    if (!data.lastName?.trim()) {
      errors.push('Last name is required');
    }

    if (!data.email?.trim()) {
      errors.push('Email address is required');
    } else if (!this.isValidEmail(data.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!data.phone?.trim()) {
      errors.push('Phone number is required');
    }

    if (!data.service) {
      errors.push('Please select a service type');
    }

    if (!data.message?.trim()) {
      errors.push('Message is required');
    }

    return errors;
  }

  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
