const express = require("express");
const Dummy = require("../models/dummyModel");
const router = express.Router();

// Get All Data
router.get("/", async (req, res) => {
    const data = await Dummy.find();
    res.json(data);
});

// Get Single Data
router.get("/:id", async (req, res) => {
    const data = await Dummy.findById(req.params.id);
    res.json(data);
});

// Add New Data
router.post("/", async (req, res) => {
    try {
        const data = await Dummy.insertMany(req.body); 
        res.status(201).json({ message: "Users added successfully", data });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Data
router.put("/:id", async (req, res) => {
    const updatedData = await Dummy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
});

// Delete Data
router.delete("/:id", async (req, res) => {
    await Dummy.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
});

module.exports = router;
