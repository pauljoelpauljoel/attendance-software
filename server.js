const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files (index.html, script.js)

// MongoDB Connection
// URL Encoded password: @ -> %40
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://pauljoel:pauljoel@cluster0.awq2jin.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Student Schema
const studentSchema = new mongoose.Schema({
    reg: { type: String, required: true, unique: true },
    name: String,
    dept: String,
    shift: String,
    class: String,
    email: String,
    year: String,
    status: String,
    date: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

// Routes

// Mark Attendance (Upsert)
app.post('/api/mark', async (req, res) => {
    try {
        const { reg, name, dept, shift, class: studentClass, year, status } = req.body;

        // Find and update, or insert if new
        const student = await Student.findOneAndUpdate(
            { reg: reg },
            {
                name,
                dept,
                shift,
                class: studentClass,
                year,
                status,
                date: new Date()
            },
            { new: true, upsert: true }
        );

        res.json({ success: true, student });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete Attendance
app.delete('/api/delete', async (req, res) => {
    try {
        const { reg } = req.body;
        const result = await Student.findOneAndDelete({ reg: reg });

        if (result) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, error: 'Student not found' });
        }
    } catch (error) {
        console.error('Error deleting attendance:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get All Students (Optional, for debugging or future sync)
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
