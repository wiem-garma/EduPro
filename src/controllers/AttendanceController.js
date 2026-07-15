const BaseController = require("./BaseController");
const attendanceService = require("../services/attendance.service");

module.exports = new BaseController(attendanceService, "Attendance");