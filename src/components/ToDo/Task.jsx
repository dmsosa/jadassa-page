import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditTask from "./EditTask";

function Task({ task, index, checkHandler, editHandler, deleteHandler }) {

    const [ editMode, setEditMode ] = useState(false);

    const handleDetele = () => {
        deleteHandler(task.text);
    }

    
    return (
        
            editMode ? 
            <EditTask index={index} text={task.text} editHandler={editHandler} setEditMode={setEditMode}/> : 
            
            <div className={task.completed ? "task completed-task":"task"}>
            <div className="square">{index}</div>
            <p>{task.text}</p>
            <div className="task-buttons">
                <input type="checkbox" checked={task.completed} onChange={() => checkHandler(task.text)}></input>
                <button className="btn-info" onClick={() => setEditMode(true)}><FaEdit/></button>
                <button className="btn-danger" onClick={() => handleDetele(task.text)}><MdDelete/></button>
            </div>
        </div>
        

    )
}

export default Task;