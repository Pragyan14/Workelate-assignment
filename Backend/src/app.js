import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from "./routes/user.routes.js"
import reviewRoute from "./routes/review.routes.js"
import bookRoute from "./routes/book.routes.js"


// router declaration 
app.use("/api/v1",userRouter);
app.use("/api/v1",reviewRoute);
app.use("/api/v1",bookRoute);


export {app};