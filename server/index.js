import bodyParser from "body-parser";
import express from "express";

const port = 8080;

const app = express();

app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on port ${port}`));
