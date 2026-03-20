const db = require("../config/db");

exports.addStudent = (req, res) => {

    const { name, contact_number, course_id, status, time } = req.body;

    // 🔥 Validation
    if (!name || !contact_number || !course_id || !status || !time) {
        return res.status(400).send("All fields are required ❌");
    }

    const sql = `
    INSERT INTO students (name, contact_number, course_id, status, time) 
    VALUES(?,?,?,?,?)
    `;

    db.query(sql, [name, contact_number, course_id, status, time], (err, data) => {
        if (err) return res.send(err);
        res.send("Student Added..");
    });
}

exports.getStudent = (req, res) => {
    const sql = `
    SELECT students.*, courses.course_name
    FROM students
    JOIN courses
    ON students.course_id = courses.id
    `;

    db.query(sql, (err, data) => {
        if (err) return res.send(err);
        res.json(data);
    });
}

// filter for search students 

exports.searchStudents = (req, res) => {
    const { name, course_id, status } = req.query;
    const { sort } = req.query;

    let sql = `
    SELECT s.*, c.course_name
    FROM students s
    JOIN courses c
    ON s.course_id = c.id
    WHERE 1 = 1
    `;

    let values = [];

    if (name) {
        sql += " AND s.name LIKE LOWER(?)";
        values.push(`%${name}%`);
    }

    if (course_id) {
        sql += " AND s.course_id = ?";
        values.push(course_id);
    }

    if (status) {
        sql += " AND s.status = ?";
        values.push(status);
    }

    if (sort === "name_asc") {
        sql += " ORDER BY s.name ASC";
    }

    if (sort === "name_desc") {
        sql += " ORDER BY s.name DESC";
    }

    db.query(sql, values, (err, data) => {
        if (err) return res.send(err);
        res.json(data);
    });
}

exports.deleteStudent = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (err, data) => {
        if (err) return res.send(err);
        res.send("Student Deleted..✅");
    });
}

exports.updateStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const sql = "UPDATE students SET status = ? WHERE id = ?";

    db.query(sql, [status, id], (err, result) => {
        if(err) return res.send(err)
            res.send("status Updated Successfully ✅");
    })
}