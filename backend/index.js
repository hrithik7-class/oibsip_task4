const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./router/auth.Route.js")



require("./model/db.js");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

app.use("/auth",AuthRouter );

const PORT = process.env.PORT || 5000;

app.get("/ping",(req,res)=>{
    res.send("Pong");
})


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);

})