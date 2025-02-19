import { Document } from '../main';

export const axiosInterceptor: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Axios Interceptor',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Axios Interceptor',
        content:
          'Axios interceptors are functions that run before a request is sent or after a response is received, allowing you to modify requests or handle responses globally. They are useful for adding authentication headers, logging requests, handling errors, or transforming response data. You can add interceptors using axios.interceptors.request.use for requests and axios.interceptors.response.use for responses.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i axios`
      },
      {
        heading: 'Axios Interceptor Template',
        sectionType: 'component',
        code: `import axios from 'axios';
import { BASE_URL } from '../env';

// Utility function to retrieve the token
const getToken = () => localStorage.getItem('authToken');

// Create an Axios instance with default configurations
const request = axios.create({
  baseURL: BASE_URL, // Set the base API URL
  withCredentials: true, // Enable cross-origin requests with credentials
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attaches Authorization token to every request
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handles API response and errors
request.interceptors.response.use(
  (response) => response, 
  (error) => handleErrorResponse(error)
);

// Function to handle error responses
const handleErrorResponse = (error) => {
  if (!error.response) {
    console.error('❌ Network error or no response received:', error);
    return Promise.reject({ message: 'Network Error', error });
  }

  const { status } = error.response;
  const currentPath = window.location.pathname;

  switch (status) {
    case 401: // Unauthorized - Clear token and redirect to home
      console.warn('⚠️ Unauthorized request (401) - Redirecting to login...');
      localStorage.removeItem('authToken');
      if (currentPath !== '/') window.location.href = '/';
      break;

    case 429: // Too Many Requests - Retry mechanism (optional)
      console.warn('⚠️ Too Many Requests (429) - Consider retrying...');
      break;

    case 500: // Internal Server Error
      console.error('🔥 Server Error (500):', error.response.data);
      break;

    default:
      console.error(\`⚠️ API Error (\${status}):\`, error.response.data);
      return Promise.reject(error);
  }
};

export default request;
`
      },
      {
        heading: 'Usage',
        sectionType: 'component',
        code: `
import request from './axios';

const getUser = async () => {
    try {
        const response = await request.get('/api/users');
        return response.data; // Ensure the function returns useful data
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error; // Re-throw to allow calling function to handle it
    }
};

        `
      }
    ]
  }
};
