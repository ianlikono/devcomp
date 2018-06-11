import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  box-shadow: 0 0 5px #493131;
  margin: 5px;
`;

const Bar = styled.i`
  margin-right: -10px;
  margin-bottom: 0px;
  cursor: pointer;
`;

const Dpic = styled.img`
  padding: 20px;
  border: none;
  border-radius: 200px;
  background: #fff;
  margin-left: -100px;
  margin-top: -100px;
  margin: 5px;
  width: 100px;
  height: 100px;
`;

// const imglength = Math.floor(Math.random(50 - 40) + 40);
// const imgWidth = Math.floor(Math.random(50 - 40) + 30);

class Tweet extends Component {
  render() {
    const { text, id, photos } = this.props.obj;
    return (
      <div>
        <Container>
          <Dpic src="https://picsum.photos/100/100" />
          {text}
          <Bar className="far fa-bookmark" />
        </Container>
      </div>
    );
  }
}

export default Tweet;
