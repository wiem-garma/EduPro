const BaseController = require("./BaseController");
const studentClassService = require("../services/studentClass.service");

module.exports = new BaseController(studentClassService, "StudentClass");