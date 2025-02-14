import { Document } from '../main';

export const customLogger: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Custom Logger',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Custom Logger Setup',
        content:
          'Take control of logging by overwriting console.log to add timestamps, log levels, and formatted messages. Store logs in files, databases, or external services for better debugging and auditing in backend applications. Perfect for tracking errors and monitoring performance efficiently.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Why Use a Custom Logger?',
        content: [
          {
            id: 1,
            heading: 'Enhanced Debugging & Monitoring',
            content:
              'Add timestamps, log levels, and structured messages to make debugging easier and logs more readable.'
          },
          {
            id: 2,
            heading: 'Persistent Log Storage',
            content:
              'Store logs in files, databases, or external services to track errors, monitor performance, and audit activities.'
          },
          {
            id: 3,
            heading: 'No Extra Dependencies',
            content:
              'Customize console logging without installing any additional packages—just pure JavaScript.'
          }
        ],
        sectionType: 'ordered-list'
      },
      {
        heading: 'Overriding console.log',
        sectionType: 'component',
        description:
          'You can use this code to override console.log function and store logs in your database.',
        code: `
import { dayjs } from './dayjs'; // or use any other date library

// * store the original console.log function since we will be overriding it
const originalConsoleLog = console.log;

const storeLogInDb = async (level, time, data) => {
  // * store the log in your database or file system, write your own logic here
};

const logWithDb = async (level, originalMethod, ...args) => {
  let message = '';
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (i >= 1) message += ' ';

    if (typeof arg === 'object') {
      message += JSON.stringify(arg);
    } else {
      message += arg;
    }
  }
  const time = dayjs().format('YYYY-MM-DD HH:mm:ss');

  // * store the log in your database or file system
  storeLogInDb(level, time, \`[\${time}] \${message}\`);

  // * call the original console.log function to print the message in your terminal also
  originalMethod(...args);
};

// * overriding console.log function
console.log = (...args) => logWithDb('log', originalConsoleLog, ...args);

// ? you can do this with other console functions as well such as 
// ? console.error, console.warn and console.info in order to classify logs
// ? import this file in your server.ts file and the console.log method will be overridden
// ? whenever you call console.log, it will be logged in your database or file system

export { originalConsoleLog, logWithDb };


`
      }
    ]
  }
};
