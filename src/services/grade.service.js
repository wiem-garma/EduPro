const BaseService = require("./BaseService");
const Grade = require("../models/Grade");

module.exports = new BaseService(Grade, "studentId subjectId teacherId");