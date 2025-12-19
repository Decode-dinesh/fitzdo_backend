const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./db");
const apiRouter = require("./routes/index");


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors())

app.use('/api', apiRouter)

const start = async() =>{
    try {
      await connectDb(process.env.MONGO_URI);
    } catch (error) {
      console.log(`Db Error: ${error}`);
    }
  }
  
  start();


app.get("/",(req, res) =>{
    res.send({msg:"root"});
})

const PORT =3000;

app.listen(PORT,() => {
    console.log(`port is running ${PORT}`);
});
