import express from "express";

import "dotenv/config";
//import cors from "cors";

const app = express();
const port = 3000;

/*app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());*/

app.listen(port, () => console.log("hello world"));
