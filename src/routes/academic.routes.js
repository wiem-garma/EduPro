const express = require("express");

const router = express.Router();


// Controllers
const classController = require("../controllers/ClassController");
const subjectController = require("../controllers/SubjectController");
const studentClassController = require("../controllers/StudentClassController");
const gradeController = require("../controllers/GradeController");
const attendanceController = require("../controllers/AttendanceController");
const assessmentController = require("../controllers/AssessmentController");
const teacherSubjectController = require("../controllers/TeacherSubjectController");



// =====================
// Classes
// =====================
router.route("/classes")

.get(classController.getAll)

.post(classController.create);



router.route("/classes/:id")

.get(classController.getById)

.put(classController.update)

.delete(classController.delete);


// =====================
// Subjects
// =====================

router.route("/subjects")
    .get(subjectController.getAll)
    .post(subjectController.create);


router.route("/subjects/:id")
    .get(subjectController.getById)
    .put(subjectController.update)
    .delete(subjectController.delete);



// =====================
// Student Classes
// =====================

router.route("/student-classes")
    .get(studentClassController.getAll)
    .post(studentClassController.create);


router.route("/student-classes/:id")
    .get(studentClassController.getById)
    .put(studentClassController.update)
    .delete(studentClassController.delete);



// =====================
// Grades
// =====================

router.route("/grades")
    .get(gradeController.getAll)
    .post(gradeController.create);


router.route("/grades/:id")
    .get(gradeController.getById)
    .put(gradeController.update)
    .delete(gradeController.delete);



// =====================
// Attendances
// =====================

router.route("/attendances")
    .get(attendanceController.getAll)
    .post(attendanceController.create);


router.route("/attendances/:id")
    .get(attendanceController.getById)
    .put(attendanceController.update)
    .delete(attendanceController.delete);



// =====================
// Assessments
// =====================

router.route("/assessments")
    .get(assessmentController.getAll)
    .post(assessmentController.create);


router.route("/assessments/:id")
    .get(assessmentController.getById)
    .put(assessmentController.update)
    .delete(assessmentController.delete);



// =====================
// Teacher Subjects
// =====================

router.route("/teacher-subjects")
    .get(teacherSubjectController.getAll)
    .post(teacherSubjectController.create);


router.route("/teacher-subjects/:id")
    .get(teacherSubjectController.getById)
    .put(teacherSubjectController.update)
    .delete(teacherSubjectController.delete);


module.exports = router;