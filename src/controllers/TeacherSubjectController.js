const BaseController = require("./BaseController");
const teacherSubjectService = require("../services/teacherSubject.service");

module.exports = new BaseController(teacherSubjectService, "Assignment");