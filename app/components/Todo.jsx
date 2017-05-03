var React = require('react')
var createReactClass = require('create-react-class')

var Todo = createReactClass({
    render() {
        var {id, completed, text} = this.props
        return (
            <div onClick={() => {
                    this.props.onToggle(id)
                }}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        )
    }
})

module.exports = Todo