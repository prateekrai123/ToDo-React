import React from 'react';
import Draggable from 'react-draggable';
import '../styles/Home.scss';

const TodoCards = ({ task, time }) => {
  console.log(task);
  return (
    <Draggable>
      <div className="cards">
        <h2>Task Name = {task}</h2>
        <h3>Task Time = {time}</h3>
      </div>
    </Draggable>
  );
};

export default TodoCards;
