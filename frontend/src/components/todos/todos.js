import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: 70px;
  margin-top: 10px;
`;

const Errors = styled.div`
  color: red;
  margin-left: 100px;
`;
const TodosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 5px #493131;
`;

const EdDel = styled.div`
  padding: 5px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos: [],
      error: '',
      editing: false,
      submitEdit: false,
    };
  }

  // componentDidMount() {
  //   axios.get('/api/todos').then((response) => {
  //     this.setState({ todos: response.data });
  //   });
  // }

  onChangeListener = (e) => {
    this.setState({ error: '' });
    this.setState({ input: e.target.value });
    // console.log(this.state);
  };

  onClickSubmit = () => {
    if (this.state.input !== '') {
      axios.post('api/todos', { text: this.state.input }).then((response) => {
        this.setState({ todos: response.data, input: '' });
      });
    } else {
      this.setState({ error: 'Please Input Something' });
    }
  };

  deleteTodoHandler = (id) => {
    axios.delete(`/api/todos/${id}`).then((response) => {
      this.setState({ todos: response.data });
    });
  };

  editSaveTodoHandler = (id, text) => {
    this.setState({ editing: !this.state.editing });
    this.state.submitEdit
      ? axios.put(`/api/todos/${id}`, { text }).then((response) => {
        this.setState({ todos: response.data });
      })
      : this.setState({ submitEdit: !this.state.submitEdit });
  };

  // onTextAreaCHange = (e) => {
  //   this.setState({ textArea: e.target.value });
  //   console.log(this.state.textArea);
  // };

  render() {
    const { todos, id, editing } = this.state;
    const todosDisplay = todos.map(todo => (
      <TodosWrapper key={todo.id}>
        {editing ? <input onChange={this.onChangeListener} /> : todo.text}
        <EdDel>
          <i
            // onClick={this.onEditHandler}
            onClick={() => this.editSaveTodoHandler(todo.id, this.state.input)}
            className="fas fa-edit"
            style={{ cursor: 'pointer', margin: '5px' }}
          />
          <i
            onClick={() => this.deleteTodoHandler(todo.id)}
            className="fas fa-trash-alt"
            style={{ cursor: 'pointer', margin: '5px' }}
          />
        </EdDel>
      </TodosWrapper>
    ));
    return (
      <div>
        <Container>
          <input onChange={this.onChangeListener} />
          <button onClick={this.onClickSubmit}>submit</button>
        </Container>
        <Errors>{this.state.error !== '' ? this.state.error : false}</Errors>
        <div>{todosDisplay}</div>
      </div>
    );
  }
}
