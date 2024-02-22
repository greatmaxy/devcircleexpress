
const express = require('express');
const studentRoutes = require('./src/routes')


const app = express();

app.use(express.json());

const PORT = process.env.PORT ||8800;

app.get("/",(req,res)=>{
	res.send("hello world");
})

app.use("/api/v1/students",studentRoutes);

app.listen(PORT,console.log(
`Server started on port ${PORT}`));
