const mongoose = require('mongoose');   // ← AJOUT OBLIGATOIRE

const classSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true  },
  level: { type: String, required: true },
  section: String,
  academicYear: { type: String, required: true },
  schoolYear: String,           
  teacherId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  capacity: { type: Number, min: 1 },
  room: String,
}, { timestamps: true });


module.exports = mongoose.model('Class', classSchema);