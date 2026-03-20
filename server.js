const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => {
    res.send("API is Running ");
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
})