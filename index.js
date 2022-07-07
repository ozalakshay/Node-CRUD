import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  // console.log("On the / page..");
  res.send(`<h1>Responding from the server</h1> `);
});



app.listen(PORT, () =>
  console.log(`App is listening on port http://localhost:${PORT}`)
);
