const { Router } = require("express");

const controller = require("./controller");

const router = Router();

// router.get('/',(req,res)=>{
//     res.send("Using api routers")
// })

router.get("/", controller.getStudents);

router.post("/", controller.addStudents);

router.get("/:rollnumber", controller.getStudentsById);

router.patch("/:rollnumber", controller.updateStudents);

router.delete("/:rollnumber",controller.removeStudents);

module.exports = router;
