import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
let users = [
];

router.get("/", (req, res) => {
  // res.send(`<p>Welcome to the user routes</p>`);
  res.send(users);
  // console.log("hi from user route");
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const user = req.body;
  // const userId = uuidv4();

  // const userWithId = { ...user, id: uuidv4() };
  users.push({ ...user, id: uuidv4() });
  // console.log(req.body);
});

// console.log(users, users.length);

export default router;
