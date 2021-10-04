import React, { useState } from 'react'
import ReactModal from 'react-modal';
import '../styles/Home.scss'
import ToDoList from './ToDoList';

const Home = () => {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [task, setTask] = useState(null);
    const [taskTime, setTaskTime] = useState(null);

    const onAddClick = () => {
        setOpenAddModal(true);
    }

    const onAddModalClick = () => {
        let arr = []
        if(localStorage.getItem("arr")!=null)
            arr = JSON.parse(localStorage.getItem("arr"));
        const Task = {"name": {task}, "time": {taskTime}}
        arr.push(Task)
        localStorage.setItem("arr",JSON.stringify(arr));
        setTask("");
        setTaskTime("")
        setOpenAddModal(false);
    }

    const onCloseModalClick = () => {
        setOpenAddModal(false);
    }

    const onTaskNameChange = (e) => {
        setTask(e.target.value)
    }

    const onTaskTimeChange = (e) => {
        setTaskTime(e.target.value)
    }

    const onClearClick = () => {
        localStorage.clear()
    }

    return (
        <div>
            <div className="mh">
                To-Do App
            </div>
            <button className="bt-blue" onClick={onAddClick} style={{marginBottom: "20px"}}><h3>Add Task</h3></button>
            <ReactModal isOpen={openAddModal}>
                <h2>Add Task</h2>
                <h3>Task Name</h3>
                <input type="text" placeholder="Task Name" value={task} onChange={onTaskNameChange}></input>
                <h3>Timing</h3>
                <input type="text" placeholder="Time" value={taskTime} onChange={onTaskTimeChange}></input>
                <button onClick={onAddModalClick}>Add</button>
                <button onClick={onCloseModalClick}>Close</button>
            </ReactModal>
            <ToDoList />
            <button className="bt-blue" onClick={onClearClick} style={{marginTop: "20px"}}><h3>Clear All</h3></button>
        </div>
    )
}

export default Home
