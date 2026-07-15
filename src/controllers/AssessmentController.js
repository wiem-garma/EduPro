const BaseController = require("./BaseController");
const assessmentService = require("../services/assessment.service");

module.exports = new BaseController(assessmentService, "Assessment");