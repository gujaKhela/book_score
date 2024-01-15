import react from '@vitejs/plugin-react';
import path from 'path';

export default {
  plugins: [react()],
  resolve: {
    alias: {
      '/(.*)': path.resolve(__dirname, 'src/index.jsx'),
    },
  },
  define: {
    // You can define global variables here if needed
  },
  server: {
    proxy: {
      // Proxy settings if you have an API server
      '/api': 'http://localhost:3000',
    },
    middleware: [
      // Custom middleware for handling 404 errors
      (req, res, next) => {
        if (req.url.startsWith('/_error')) {
          res.statusCode = 404;
          res.end('Not Found');
        } else {
          next();
        }
      },
    ],
  },
};
