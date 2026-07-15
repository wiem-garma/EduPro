const BaseService = require("./BaseService");
const Class = require("../models/Class");


module.exports = new BaseService(
    Class,
    [
        {
            path:"teacherId",
            model:"User",
            select:"id"
        }
    ]
);