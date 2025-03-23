const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Routes
const dummyRoutes = require("./routes/dummyRoutes");
app.use("/api/dummy", dummyRoutes);

// Base Route
app.get("/", (req, res) => {
    res.json({ message: "🚀 API is working on Vercel!" });
});

// Export for Vercel
module.exports = app;
