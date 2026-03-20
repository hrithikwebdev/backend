const db = require("../config/db");

exports.getDashboard = (req, res) => {
    const sql = `
     SELECT 
    COUNT(*) AS total_students,
    COUNT(CASE WHEN status = 'Active' THEN 1 END) AS active_students,
    COUNT(CASE WHEN status = 'Completed' THEN 1 END) AS completed_students
    FROM students
    `;

    db.query(sql, (err, result) => {
        if (err) return res.send(err);
        res.json(result[0]);
    });
}