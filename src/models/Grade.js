const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  examType: { type: String, required: true, enum: ['quiz', 'exam', 'td', 'controle','others'] },
  value: { type: Number, required: true, min: 0, max: 20 },
  date: { type: Date, required: true },
  semester: {type: Number, required: true },
  academicYear: { type: String, required: true },
   remark: String,
}, { timestamps: true });
module.exports = mongoose.model('Grade', gradeSchema);