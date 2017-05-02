var React = require('react')
var TodoList = require('TodoList')

var TodoApp = React.createClass({
    getInitialState() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Fill in the survey'
                },
                {
                    id: 4,
                    text: 'Buy flowers'
                }
            ]
        }
    },
    render() {
        var {todos} = this.state
        
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
})

module.exports = TodoApp