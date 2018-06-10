import Twit from "twit";

let tweets = [];
let id = 0;
let searchId = 0;
let query = "programming";

const T = new Twit({
  consumer_key: "Ece4mbu4x2WPgarB0jWYmLHfC",
  consumer_secret: "7WDgWDBjz1To47sLSt2T4qqWprUBWXqSyJSiaqkiw1GG41I2iA",
  access_token: "820116061504815106-NldEP6fPIUrUSlHXJrl6ss4YGDZefxd",
  access_token_secret: "Aod6pDZgYVYMkjvZYoX0jIxFdV1LIgauWtZJfmiJyNIns",
});

T.get("search/tweets", { q: query, count: 50 }, (err, data) => {
  // console.log(data);
  const arr = data.statuses;
  const objectsWithIds = arr.map((obj) => {
    obj.id = id;
    id++;
    return obj;
  });
  tweets = objectsWithIds;
});

const getTweets = (req, res) => {
  res.status(200).send(tweets);
};

const searchTweet = (req, res) => {
  const { text } = req.body;
  T.get("search/tweets", { q: text, count: 50 }, (err, data) => {
    const searchArr = data.statuses;
    const searchesWithIds = searchArr.map((obj) => {
      obj.id = searchId;
      searchId++;
      return obj;
    });
    tweets = searchesWithIds;
    res.status(200).send(tweets);
  });
};

export default { getTweets, searchTweet };
