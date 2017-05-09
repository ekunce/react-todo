var React = require('react')
var {connect} = require('react-redux')
var createReactClass = require('create-react-class')
var TodoAPI = require('TodoAPI');

import Todo from 'Todo';

export var TodoList = createReactClass({
    render() {
        var {todos, showCompleted, searchText} = this.props;

        var renderTodos = () => {
            var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do </p>
                )
            }
            return filteredTodos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                )
            })
        }

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
})

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
