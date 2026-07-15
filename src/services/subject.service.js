const BaseService = require("./BaseService");
const Subject = require("../models/Subject");

module.exports = new BaseService(Subject, "classId teacherId");