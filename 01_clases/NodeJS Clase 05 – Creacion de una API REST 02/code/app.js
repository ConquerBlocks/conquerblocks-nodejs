import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).send("Hola, node!");
});

export default app;