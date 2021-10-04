import React, { useEffect, useState } from 'react'
import TodoCards from './TodoCards';

const ToDoList = () => {
    const [arr, setArr] = useState([])

    var array = JSON.parse(localStorage.getItem("arr"))
    useEffect(() => {
        setArr(array)
    }, [array])

    return (
        <div>
            {arr && arr.map((v, index) => {
                const {name, time} = v;
                const {task} = name;
                const {taskTime} = time;

                return(
                    <TodoCards key={index} task={task} time={taskTime} />
                )
            })}
        </div>
    )
}

export default ToDoList
