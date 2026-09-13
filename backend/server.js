import express from "express";
import pool from "./db/connection.js";
import dotenv from "dotenv";
import { getTracks } from "./queries/trackQueries.js";
import trackRoutes from "./routes/trackRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/audio", express.static("../public/audio"));

const PORT = 3000;
app.use("/tracks", trackRoutes);
app.listen(PORT, () => {
  console.log("listening on Port" + PORT);
});
