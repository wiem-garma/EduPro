const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true, enum: ['quiz', 'exam', 'td', 'others'] },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  date: { type: Date, required: true },
  totalScore: { type: Number, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Assessment', assessmentSchema);
