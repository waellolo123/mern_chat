import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("connected to db");
})
.catch((error)=>{
  console.log(error);
})

// routes
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/users", userRoute);

app.listen(port, () => console.log(`server is running on ${port}`))

