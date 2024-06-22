const express = require("express");
const app = express();

const PORT = 4000;
// 
const authRouter = require("./routes/auth");

app.use(express.json());
app.use("/", authRouter);


app.listen(PORT, ()=> {
    console.log("Server is running on: " + PORT);
});