const pool = require("../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

// const getStudentsById = (req, res) => {
//     const rollnumber = parseInt(req.params.rollnumber);

//     console.log(rollnumber);

//     pool.query(queries.getStudentsById, [rollnumber], (err, results) => {
//       if (err) throw err;
//       res.status(200).json(results.rows);
//     });
//   };

const getStudentsById = async (req, res) => {
  try {
    const rollnumber = parseInt(req.params.rollnumber);

    const results = await pool.query(queries.getStudentsById, [rollnumber]);

    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send("An error occured");
  }
};

const addStudents = async (req, res) => {
  try {
    const { rollnumber, name } = req.body;

    const results = await pool.query(queries.addStudents, [rollnumber, name]);

    res.status(201).json(results.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateStudents = async(req,res) =>{
    try{
        const {name} = req.body;
        const rollnumber = parseInt(req.params.rollnumber);
        const results = await pool.query(queries.updateStudents,[name,rollnumber]);

        res.status(200).json(results.rows);
    }catch(err){
        res.status(500).send(err);
    }
}

const removeStudents = async(req,res)=>{
    try{
        const rollnumber = parseInt(req.params.rollnumber);

        const results = await pool.query(queries.removeStudents,[rollnumber]);
        res.status(200).send(results);
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
  getStudents,
  getStudentsById,
  addStudents,
  updateStudents,
  removeStudents
};
