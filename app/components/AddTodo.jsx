var React = require('react')
var {connect} = require('react-redux');
var actions = require('actions');
var createReactClass = require('create-react-class')

export var AddTodo = createReactClass({
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
    },
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
})

export default connect()(AddTodo)
