const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const dbconnection = require('./config/dbconnection');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import your route
const userRouter = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoute');
const instructorRoutes = require('./routes/instructorRoute'); // Import instructor routes



// Connect to DB
dbconnection();

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mount routes
app.use("/users", userRouter);
app.use("/course", courseRoutes);
app.use("/instructors", instructorRoutes); 


// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
