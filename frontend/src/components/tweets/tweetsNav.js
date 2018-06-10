import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-left: 40px;
  position: relative;
  height: 60px;
  width: 550px;
  margin-top: 10px;
`;

const Invisible = styled.span`
  position: absolute;
  opacity: 1;
  border-bottom: 5px solid #5e003e;
  height: 55px;
  color: rgba(0, 0, 0, 0);
  max-width: 540px;
  margin-left: 30px;
  font-size: 18px;
  min-width: 10px;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
  transition: all 500ms ease;
`;

const Input = styled.input`
  display: flex;
  font-size: 18px;
  outline: none;
  padding-right: 50px;
  height: 60px;
  width: 550px;
  border-radius: 50px;

  &:hover {
    border: 1px solid #5e003e;
    padding-left: 2px;
    box-shadow: 0 0 5px #493131;
  }

  &:focus {
    border: 1px solid #5e003e;
    padding-left: 2px;
    box-shadow: 0 0 5px #493131;
  }
`;

const Clear = styled.button`
  user-select: inital;
  pointer-events: initial;
  color: black;
  position: absolute;
  right: -50px;
  top: 20px;
  margin: -10px;
  background: #5e003e;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
`;

const Submit = styled.button`
  background: #5e003e;
  color: #fff;
  border: none;
  box-shadow: 0 0 5px #493131;
  cursor: pointer;
  border-radius: 100px;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', searchArray: [] };
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      currentIndex: -1,
    });
  }

  clearInput(e) {
    this.setState({ value: '' });
  }

  handleKeyPress(e) {
    const { key, ctrlKey } = e;

    if (key === 'ArrowDown' || (ctrlKey && key === 'n')) {
      this.setState({
        currentIndex: Math.min(this.state.currentIndex + 1, 9),
      });
      e.preventDefault();
    }

    if (key === 'ArrowUp' || (ctrlKey && key === 'p')) {
      this.setState({
        currentIndex: Math.max(this.state.currentIndex - 1, -1),
      });
      e.preventDefault();
    }
  }

  handleFocus(e) {
    e.target.setSelectionRange(0, this.state.value.length);
  }

  onSearchSubmit(val) {
    // console.log(val);
    // console.log(this.props);
    const { searchState } = this.props;
    if (val !== '') {
      axios.post('/api/tweets', { text: val }).then((response) => {
        // console.log(response.data);
        this.setState({ searchArray: response.data, val: '' });
        // console.log(this.state.searchArray);
        this.setState({ searchState: this.state.searchArray });

        console.log(searchState);
        console.log(this.state.searchArray);
      });
    }
    // console.log(this.state.searchArray);
  }

  render() {
    return (
      <Wrapper>
        <Invisible>
          {this.state.value}
          {!!this.state.value && <Clear onClick={this.clearInput}>clear</Clear>}
        </Invisible>
        <Input
          onKeyDown={this.handleKeyPress}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          type="text"
          value={this.state.value}
          ref={input => (this.input = input)}
          placeholder="SEARCH FOR A TWITTER TOPIC"
        />
        {/* <h1>{this.state.currentIndex}</h1> */}
        <Submit onClick={() => this.onSearchSubmit(this.state.value)}>Search</Submit>
        {/* () => this.onSearchSubmit(this.state.value) */}
        {/* {console.log(this.state.value)} */}
      </Wrapper>
    );
  }
}

export default Search;
