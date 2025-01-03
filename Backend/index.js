require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingsRoutes = require('./api/bookings');

const cors = require('cors');

// Define allowed origins
const allowedOrigins = [
  'https://restaurant-table-booking-web-app-42kw.vercel.app', 
 
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);  
    } else {
      callback(new Error('Not allowed by CORS'), false);  
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

// Apply the CORS middleware
app.use(cors(corsOptions));


// Initialize app and connect to DB
const app = express();
connectDB();

// Middleware
// app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingsRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
