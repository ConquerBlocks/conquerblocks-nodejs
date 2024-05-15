import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";

const app = express();

const DB_URL =
  process.env.NODE_ENV === "test"
    ? "mongodb://localhost:27017/ticketing-db-test"
    : process.env.DB_URL || "mongodb://localhost:27017/ticketing-db";

mongoose
  .connect(DB_URL)
  .then(() => console.log(`Connected to DB: ${DB_URL}`))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use(morgan("dev"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).send("Hola, node!");
});

export default app;
