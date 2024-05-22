import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Server is running on port http://localhost:${port}`);
});

export default server;
