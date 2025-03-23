const express = require("express");
const Dummy = require("../models/dummyModel");
const router = express.Router();

// Get All Data
router.get("/", async (req, res) => {
    try {
        const data = await Dummy.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Get Single Data
router.get("/:id", async (req, res) => {
    try {
        const data = await Dummy.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch record" });
    }
});

// Add New Data
router.post("/", async (req, res) => {
    try {
        const newData = new Dummy(req.body);
        const savedData = await newData.save();
        res.status(201).json({ message: "User added successfully", data: savedData });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Data
router.put("/:id", async (req, res) => {
    try {
        const updatedData = await Dummy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ error: "Failed to update record" });
    }
});

// Delete Data
router.delete("/:id", async (req, res) => {
    try {
        const result = await Dummy.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete record" });
    }
});

module.exports = router;
