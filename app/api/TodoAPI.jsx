var $ = require('jquery')

module.exports = {
    filterTodos(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        })

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            return todo.text.toLowerCase().indexOf(searchText) !== -1 || searchText.length === 0
        })

        // sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1
            } else if (a.completed && !b.completed) {
                return 1
            } else {
                return 0
            }
        })

        return filteredTodos;
    }
}
