import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "../actions";
import Todo from "../components/Todo";
import {getVisibleTodos} from "../util";

const TodoList = (props) => {
    const todos = props.todos
    const onTodoClick = props.onTodoClick

    return (
        <ul>
            {todos.map(
                todo => <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}/>
            )}
        </ul>
    )
}

const mapStateToProps = (state) => {

    return {
        todos: getVisibleTodos(state.todos,
            state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) =>
            dispatch(toggleTodo(id))
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

