const mongoose = require("mongoose");

const DummySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
    species: { type: String, required: true }, 
    age: { type: Number, required: true }, 
    habitat: { type: String, required: true },
    diet: { type: String, required: true }, 
    conservationStatus: { type: String, required: true }, 
});

module.exports = mongoose.model("Dummy", DummySchema);
