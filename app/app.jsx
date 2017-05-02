var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var TodoApp = require('TodoApp')

// Load foundation
$(document).foundation();

// APP css
//require('style-loader!css-loader!sass-loader!applicationStyles')
require('applicationStyles')

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
)

