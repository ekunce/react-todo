var React = require('react')
var createReactClass = require('create-react-class')

var Todo = require('Todo')

var TodoList = createReactClass({
    render() {
        var {todos} = this.props
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do </p>
                )
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList