const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.post("/add", studentController.addStudent);
router.get("/search", studentController.searchStudents);
router.get("/", studentController.getStudent);
router.put("/status/:id", studentController.updateStatus);
router.delete("/:id", studentController.deleteStudent);


module.exports = router;