var React = require('react')

var AddTodo = React.createClass({
    onSubmit(e) {
        e.preventDefault()

        var todoText = this.refs.todoText.value
        if (todoText && todoText.length) {
            this.refs.todoText.value = ''
            this.props.onAddTodo(todoText)
        } else {
            this.refs.todoText.focus()
        }
    },
    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
})

module.exports = AddTodo