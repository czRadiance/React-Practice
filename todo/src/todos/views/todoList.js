import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';
import TodoItem from './todoItem.js'; 
import {FilterTypes} from '../../constants.js';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return(
        <ul className="todo-list">{
            todos.map((item) => (
                <TodoItem 
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => onToggleTodo(item.id)}
                    onRemove={() => onRemoveTodo(item.id)}
                />
            ))
        } 
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const filterTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter((item) => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter((item) => !item.completed);
        default:
            return null;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.filter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);