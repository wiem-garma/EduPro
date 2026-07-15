// src/controllers/class.controller.js

const BaseController = require("./BaseController");

const classService = require("../services/class.service");


module.exports = new BaseController(
    classService,
    "Class"
);