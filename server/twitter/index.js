import Twit from "twit";

let tweets = [];
let id = 0;

const T = new Twit({
  consumer_key: "Ece4mbu4x2WPgarB0jWYmLHfC",
  consumer_secret: "7WDgWDBjz1To47sLSt2T4qqWprUBWXqSyJSiaqkiw1GG41I2iA",
  access_token: "820116061504815106-NldEP6fPIUrUSlHXJrl6ss4YGDZefxd",
  access_token_secret: "Aod6pDZgYVYMkjvZYoX0jIxFdV1LIgauWtZJfmiJyNIns",
});

T.get("search/tweets", { q: "programming since:2011-07-11", count: 100 }, (err, data) => {
  //   console.log(data);
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

export default { getTweets };
