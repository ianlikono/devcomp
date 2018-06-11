import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';
import Tweet from './tweet';

const Container = styled.div`
  margin: 20px;
  ${'' /* display: flex;
  flex-direction: column; */};
`;

class Tweets extends Component {
  constructor() {
    super();

    this.state = {
      tweets: [],
      photos: [],
      imgIndex: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { tweetsParent } = this.props;
    axios.get('/api/tweets').then(response => {
      this.setState({ tweets: response.data });
      this.setState({ tweetsParent: this.state.tweet });
      // console.log(response.data);
    });

    axios
      .get('https://api.unsplash.com/search/photos/?page=1&per_page=10&query=funny&client_id=2ee9f97492b056fcd496da6b45e28ad2c588f580f2ccdb12fae4a722f533e663')
      .then(response => {
        const images = [];
        response.data.results.map(pic => {
          images.push(pic.urls.raw);
        });
        this.setState((this.state.photos: images));
        // console.log(this.state);
      });
  }

  render() {
    const { tweets, photos, imgIndex } = this.state;

    const tweetDisplays = tweets.map(tweet => (
      <Tweet key={tweet.id} imgIndex={imgIndex} images={photos} obj={tweet} />
    ));
    return <Container>{tweetDisplays}</Container>;
  }
}

export default Tweets;
