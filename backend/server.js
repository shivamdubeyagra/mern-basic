import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productsRoutes from "./routes/products.routes.js";
dotenv.config();


const PORT = process.env.PORT || 5000;
const app = express();


const __dirname = path.resolve();

app.use(express.json());
app.use("/api/products", productsRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, async()=>{
    await connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
})