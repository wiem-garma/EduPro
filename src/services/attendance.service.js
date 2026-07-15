const BaseService = require("./BaseService");
const Attendance = require("../models/Attendance");

module.exports = new BaseService(Attendance, "studentId classId subjectId teacherId");