const db = require("../config/db");

exports.addCourse = (req, res) => {
    const {course_name} = req.body;

    const sql = "INSERT INTO courses (course_name) VALUES (?)";

    db.query(sql, [course_name], (err, data) => {
        if(err) return res.send(err);
        res.send("Course Added..");
    });
}

exports.getCourse = (req, res) => {
    db.query("SELECT * FROM courses", (err, data) => {
        if(err) return res.send(err);
        res.json(data);
    })
}

exports.deleteCourse = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM courses WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if(err) return res.send(err);
        res.send("Course Deleted.. ✅");
    });
}
