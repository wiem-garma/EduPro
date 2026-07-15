const BaseController = require("./BaseController");
const gradeService = require("../services/grade.service");

module.exports = new BaseController(gradeService, "Grade");