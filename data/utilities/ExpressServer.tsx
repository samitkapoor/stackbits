import { Document } from '../main';

export const expressServer: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Express Server',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Express Server',
        content:
          'This Express.js server setup includes CORS configuration, rate limiting for security, JSON parsing, and essential middleware for handling requests efficiently. It follows best practices for maintainability, security, and flexibility, making it easy to scale and integrate with a frontend application.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i express cors express-rate-limit`
      },
      {
        heading: 'Express Server.js Template',
        sectionType: 'component',
        code: `import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import './config/logging'; // ? Custom logging setup, refer to the logging guide -> https://stackbits.dev/docs/customlogger

const PORT = process.env.PORT || 3000; // Use environment variable for flexibility

const app = express();

// Middleware Configuration

// Enable CORS for specific origins
app.use(
  cors({
    origin: ['http://localhost:3000'], // Adjust based on frontend deployment
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow methods
  })
);

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1-minute window
  limit: 100, // Max 100 requests per window
  standardHeaders: 'draft-7', // Use the latest draft headers
  legacyHeaders: false, // Disable deprecated headers
  message: { error: 'Too many requests from this IP, please try again later.' }, // Consistent error format
});
app.use(limiter);

// Parsing middleware
app.use(express.json({ limit: '20mb' })); // Set a reasonable body size limit
app.use(express.urlencoded({ extended: false })); // Enable URL-encoded data parsing

// Additional security headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// * Define API Routes here
// Example: app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.info(\`✅ Server is running on http://localhost:\${PORT}\`);
});
`
      }
    ]
  }
};
