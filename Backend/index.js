import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import Book from "./modal/book.modal.js";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 3001
// const URI = process.env.MongoDBURI;

mongoose.connect("mongodb://127.0.0.1:27017/bookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });



//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`server is listing on the port ${PORT}`)
})

