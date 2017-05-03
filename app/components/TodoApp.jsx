var React = require('react')
var TodoList = require('TodoList')
var AddTodo = require('AddTodo')
var TodoSearch = require('TodoSearch')
var createReactClass = require('create-react-class')

var TodoApp = createReactClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
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
    handleAddTodo(text) {
        alert('new todo: ' + text)
    },
    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render() {
        var {todos} = this.state
        
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

module.exports = TodoApp