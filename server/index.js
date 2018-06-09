import bodyParser from "body-parser";
import express from "express";
import Tweets from "./twitter";

const port = 8080;

const app = express();

app.use(bodyParser.json());

app.get("/api/tweets", Tweets.getTweets);

app.listen(port, () => console.log(`listening on port ${port}`));
