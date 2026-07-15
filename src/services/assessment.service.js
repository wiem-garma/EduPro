const BaseService = require("./BaseService");
const Assessment = require("../models/Assessment");

module.exports = new BaseService(Assessment, "subjectId classId teacherId");