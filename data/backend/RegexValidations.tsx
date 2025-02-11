import { Document } from '../main';
import InputRegexValidationDemo from '@/components/input-regex-validation-demo';

export const regexValidations: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Regex Validations',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Regex Validations',
        content:
          'Regular expressions are powerful tools for validating input formats efficiently. This section provides a collection of commonly used regex patterns and utility functions to ensure data integrity and prevent incorrect user inputs.',
        sectionType: 'paragraph'
      },
      {
        heading: '1. Email Validation',
        sectionType: 'utility',
        code: `const validateEmail = (email: string): boolean => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}`,
        preview: (
          <InputRegexValidationDemo
            label="Email"
            regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            placeholder="Enter email"
          />
        )
      },
      {
        heading: '2. Mobile Number Validation',
        sectionType: 'utility',
        code: `
// * Number should be atleast 7 digits long and shorter than 16 digit s
const validateMobileNumber = (mobile: string): boolean => {
    const regex = /^\+?[1-9]\d{6,14}$/;
    return regex.test(mobile);
}`,
        preview: (
          <InputRegexValidationDemo
            label="Number"
            regex={/^\+?[1-9]\d{6,14}$/}
            placeholder="Enter number"
          />
        )
      },
      {
        heading: '3. Password Validation',
        sectionType: 'utility',
        code: `
// * Password should be atleast 6 characters long and 
// * should contain atleast one uppercase letter, one 
// * lowercase letter and one special character
const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
    return regex.test(password);
}`,
        preview: (
          <InputRegexValidationDemo
            label="Password"
            regex={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/}
            placeholder="Enter password"
          />
        )
      },
      {
        heading: '4. URL Validation',
        sectionType: 'utility',
        code: `
const validateURL = (url: string): boolean => {
    const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/i;
    return regex.test(url);
}`,
        preview: (
          <InputRegexValidationDemo
            label="URL"
            regex={/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/i}
            placeholder="Enter URL"
          />
        )
      },
      {
        heading: '5. Postal Code Validation',
        sectionType: 'utility',
        code: `
const validatePinCode = (pin: string): boolean => {
    const regex = /^\d{6}$/; // Supports 6 digit PIN codes
    return regex.test(pin);
}`,
        preview: (
          <InputRegexValidationDemo label="Pincode" regex={/^\d{6}$/} placeholder="Enter Pincode" />
        )
      },
      {
        heading: '6. Credit Card Validation',
        sectionType: 'utility',
        code: `
// * Credit Card number should contain 16 digits
// * Number can be in the following formats:
// * XXXX-XXXX-XXXX-XXXX or XXXXXXXXXXXXXXXX or XXXX XXXX XXXX XXXX
const validateCreditCard = (cardNumber: string): boolean => {
    const regex = /^(\d{4}[- ]?){3}\d{4}|\d{16}$/;
    return regex.test(cardNumber);
}`,
        preview: (
          <InputRegexValidationDemo
            label="Credit Card"
            regex={/^(\d{4}[- ]?){3}\d{4}|\d{16}$/}
            placeholder="Enter Credit Card Number"
          />
        )
      }
    ]
  }
};
