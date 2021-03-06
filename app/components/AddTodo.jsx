import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault()
    var {dispatch} = this.props;

    var todoText = this.refs.todoText.value
    if (todoText && todoText.length) {
        this.refs.todoText.value = ''
        dispatch(actions.startAddTodo(todoText));
    } else {
        this.refs.todoText.focus()
    }
  }

  render () {
    return (
        <div className="container__footer">
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                <button className="button expanded">Add Todo</button>
            </form>
        </div>
    )
  }
}

export default Redux.connect()(AddTodo);
