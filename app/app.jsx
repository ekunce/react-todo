var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

// Load foundation
$(document).foundation();

// APP css
//require('style-loader!css-loader!sass-loader!applicationStyles')
require('applicationStyles')

ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')
)

