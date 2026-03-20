const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/add", courseController.addCourse);
router.get("/", courseController.getCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;