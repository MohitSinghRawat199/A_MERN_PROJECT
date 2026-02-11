import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.route.js";
dotenv.config();

const port = process.env.PORT || 8000;
const app = express()


app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true,
        methods:["GET","POST","PUT","DELETE","OPTIONS"]
    }
));
app.use(express.json());
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.json({message:"ExamNotes AI Backend Running"});
})
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.listen(port,()=>{
    console.log(`server running on ${port}`);
    connectDb();
});