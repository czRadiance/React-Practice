import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({text, completed, onToggle, onRemove}) => {
    const completeInfo = completed? 'not completed': 'complete it';
    return (
        <li className="todo-item">
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>remove</button>
            <button className="toggle" onClick={onToggle}>{completeInfo}</button>
        </li>
    );
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default TodoItem;