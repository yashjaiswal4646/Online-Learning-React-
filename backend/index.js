const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;



// DB connection
const dbconnection = require('./config/dbconnection');

// Connect to DB
dbconnection();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Update this to your frontend port
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const userRouter = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoute');
const instructorRoutes = require('./routes/instructorRoute');
const adminRoutes = require('./routes/adminRoute');


// Mount routes
app.use('/users', userRouter);
app.use('/courses', courseRoutes);
app.use('/instructors', instructorRoutes);
app.use('/admin', adminRoutes); 

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
