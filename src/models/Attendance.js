const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class',required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', default: null },
  date: { type: Date, required: true },
  status: { type: String, required: true,  enum: ['present', 'absent', 'late'] },
  remark: { type: String, required: false },
}, {
  timestamps: true   
});

module.exports = mongoose.model('Attendance', attendanceSchema);