const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  coefficient: { type: Number, required: true, default: 1 },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class'},
  weeklyHours: Number,
  academicYear: String,
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
