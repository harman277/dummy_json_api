const mongoose = require("mongoose");

const DummySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model("Dummy", DummySchema);
