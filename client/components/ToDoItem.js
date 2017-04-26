import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const ToDoItem = ({onClick, completed, uppercase, text, onButtonClick, onToggleBtnClick}) => (
  <li>
    <span
      onClick={onClick}
      className={ (completed ? styles.crossed : '') }
      style={{textTransform: uppercase ? 'uppercase' : 'lowercase'}}
    >
    {text}
    </span>
    <button onClick={onButtonClick}>X</button>
      <button onClick={onToggleBtnClick}>!!</button>
  </li>
);

ToDoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
    uppercase: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoItem;