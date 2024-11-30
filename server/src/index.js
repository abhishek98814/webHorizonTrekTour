import express from "express";
import mongoose from "mongoose";
import banner from "./routes/banner.routes.js";
import category from "./routes/category.routes.js";
import trekOverView from "./routes/trekOverview.routes.js";
import cors from "cors";

const app = express();

const dbUrl = "mongodb+srv://trek:trek123@cluster0.giurj.mongodb.net/trekDB?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(dbUrl);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to the Trek API!");
});

app.use("/api/v1/banners", banner);
app.use("/api/v1", category);
app.use("/api/v1", trekOverView);

app.listen(3000, () => {
    console.log("App is running at http://localhost:3000");
});
