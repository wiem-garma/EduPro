const mongoose = require('mongoose');

const teacherSubjectSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  academicYear: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('TeacherSubject', teacherSubjectSchema);
