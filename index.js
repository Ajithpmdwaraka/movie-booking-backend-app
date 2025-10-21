import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

const app = express(); // Express app object

// To parse JSON data in request body
app.use(express.json());

// Example route
app.get('/home', (req, res) => {
    return res.json({
        success: true
    });
});

// Connect to MongoDB before starting the server
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("✅ Connected to DB");

        // Start the server after DB connection is successful
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Error connecting to DB:", err);
    });

    


    