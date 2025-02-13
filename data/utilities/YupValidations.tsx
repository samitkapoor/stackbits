import { Document } from '../main';
import InputRegexValidationDemo from '@/components/input-regex-validation-demo';

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
        description: 'Take these reusable validations and store them in a separate file.',
        code: `
        import * as yup from 'yup';

// Reusable validation rules
const validations = {
  name: yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^[A-Za-z\s]+$/, 'Name cannot contain numbers or special characters')
    .required('Name is required'),

  email: yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format')
    .required('Email is required'),

  phoneNumber: yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),

  pincode: yup.string()
    .matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits')
    .required('Pincode is required'),

  url: yup.string()
    .url('Invalid URL format')
    .required('URL is required'),

  amount: yup.number()
    .positive('Amount must be a positive number')
    .typeError('Amount must be a valid number')
    .required('Amount is required'),
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
