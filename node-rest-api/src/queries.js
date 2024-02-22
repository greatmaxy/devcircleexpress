

const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students where rollnumber = $1";
const addStudents = "INSERT INTO students (rollnumber, name) VALUES ($1, $2) RETURNING *";
const updateStudents = "UPDATE students SET name=$1 WHERE rollnumber = $2 RETURNING *";

const checkRollNumberExists = "SELECT * FROM students where rollnumber = $1";
const removeStudents = "DELETE from students where rollnumber = $1";

module.exports = {
    getStudents,
    getStudentsById,
    checkRollNumberExists,
    addStudents,
    updateStudents,
    removeStudents
};