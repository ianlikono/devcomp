import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';
import Tweet from './tweet';

const Container = styled.div`
  margin: 20px;
`;

class Tweets extends Component {
  constructor() {
    super();

    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    axios.get('/api/tweets').then((response) => {
      this.setState({ tweets: response.data });
    });
  }

  render() {
    const { tweets } = this.state;

    const tweetDisplays = tweets.map(tweet => <Tweet key={tweet.id} obj={tweet} />);
    return <Container>{tweetDisplays}</Container>;
  }
}

export default Tweets;
