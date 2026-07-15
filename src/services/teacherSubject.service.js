const BaseService = require("./BaseService");
const TeacherSubject = require("../models/TeacherSubject");

module.exports = new BaseService(TeacherSubject, "teacherId subjectId classId");