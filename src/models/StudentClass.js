const mongoose = require('mongoose');

const studentClassSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true  },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  academicYear: { type: String, required: true },
  status: { type: String, required: true, enum: ['active', 'inactive'], default: 'active' },
  joinedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('StudentClass', studentClassSchema);
