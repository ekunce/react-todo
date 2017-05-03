var React = require('react')
var createReactClass = require('create-react-class')

var Todo = createReactClass({
    render() {
        var {id, text} = this.props
        return (
            <div>
                {id}. {text}
            </div>
        )
    }
})

module.exports = Todo