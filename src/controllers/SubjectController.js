const BaseController = require("./BaseController");
const subjectService = require("../services/subject.service");

module.exports = new BaseController(subjectService, "Subject");