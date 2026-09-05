import express from "express";
import pool from "./db/connection.js";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());

const testDB = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("PostgreSQL connected:", result.rows[0]);
  } catch (error) {
    console.error("PostgreSQL connection failed:", error);
  }
};
testDB();
const PORT = 3000;
app.get("/tracks", (req, res, next) => {
  console.log("logging");
  res.send("Tracks endpoint ");
});
app.listen(PORT, () => {
  console.log("listening on Port" + PORT);
});
