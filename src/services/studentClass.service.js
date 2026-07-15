const BaseService = require("./BaseService");
const StudentClass = require("../models/StudentClass");

module.exports = new BaseService(StudentClass, "studentId classId");