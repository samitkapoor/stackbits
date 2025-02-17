import { Document } from '../main';

export const yupValidations: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Regex Validations',
    order: 4
  },
  content: {
    sections: [
      {
        heading: 'Reusable Yup Validations',
        content:
          'Reusable Yup validations help streamline form validation by defining commonly used rules once and reusing them across multiple forms. This approach reduces redundancy, improves consistency, and makes validation easier to maintain.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Why Use Reusable Yup Validations?',
        content: [
          {
            id: 1,
            heading: 'Consistency Across Forms',
            content: 'Define validation rules once and use them everywhere.'
          },
          {
            id: 2,
            heading: 'Saves Development Time',
            content: 'No need to rewrite validation logic for every form.'
          },
          {
            id: 3,
            heading: 'Easy Maintenance',
            content: 'Update validation rules in one place, and they apply everywhere.'
          },
          {
            id: 4,
            heading: 'Improved Readability',
            content: 'Keep form schemas clean by referencing reusable rules.'
          },
          {
            id: 5,
            heading: 'Scalability',
            content: 'Easily extend validation logic as project requirements grow.'
          }
        ],
        sectionType: 'ordered-list'
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i yup`
      },
      {
        heading: 'Re-usable Validation Rules',
        sectionType: 'component',
        description:
          'Store these reusable validations in a separate file for easy access. They provide a simple template that works for most cases, but feel free to duplicate and customize them to fit your needs!',
        code: `
        import * as yup from 'yup';

// Reusable validation rules
const validations = {
    // ? A simple name validation, it can be used for inputs where you have to accept text only
    name: yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .matches(/^[A-Za-z\s]+$/, 'Name cannot contain numbers or special characters')
        .required('Name is required'),

    // ? This can be used for validating emails
    email: yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format')
        .required('Email is required'),

    // ? This can be used to validate phone numbers with exactly 10 digits
    phoneNumber: yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),

    // ? This can be used to validate pincodes with exactly 6 digits
    pincode: yup.string()
        .matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits')
        .required('Pincode is required'),

    // ? This is for validating URL
    url: yup.string()
        .matches(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/i, 'Invalid URL Format')
        .required('URL is required'),

    // ? This can be used for integer inputs
    amount: yup.number()
        .positive('Amount must be a positive number')
        .typeError('Amount must be a valid number')
        .required('Amount is required'),

    // ? You can also go the extra mile for conditional validations like so 👇🏻
    accountType: yup.string().oneOf(['personal', 'business']).required('Account type is required'),
    companyName: yup.string()
        .when(['accountType'], { // ? Accept n number of arguments here
        is: 'business', // ? If accountType is 'business'
        then: (schema) => schema.required('Company name is required'), // ? Make it required
        otherwise: (schema) => schema.notRequired(), // ? Otherwise, it's optional
    }),

};

export default validations;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `
import * as yup from 'yup';
import validations from './validations';

const formSchema = yup.object().shape({
  name: validations.name,
  email: validations.email,
  phoneNumber: validations.phoneNumber,
  pincode: validations.pincode,
  url: validations.url,
  amount: validations.amount,
});

export default formSchema;`
      }
    ]
  }
};
