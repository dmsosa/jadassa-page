import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Task({ task, index, checkHandler, editHandler, deleteHandler }) {

    const [ editInput, setEditInput ] = useState("");

    const showPopup = (popupName) => {
        switch (popupName) {
            case "edit": {
                document.getElementById("editPopup").classList.toggle("show");
                document.getElementById("deletePopup").classList.remove("show");
                break;
            }
            case "delete": {
                document.getElementById("deletePopup").classList.toggle("show");
                document.getElementById("editPopup").classList.remove("show");
                break;
            }
            default: {
                break;
            }
        }
    }

    const handleEdit = (event) => {
        setEditInput(event.target.value);
    }
    

    return (
        <div className={task.completed ? "task completed-task":"task"}>
            <div className="square">{index}</div>
            <p>{task.text}</p>
            <input type="checkbox" checked={task.completed} onChange={() => checkHandler(task.id)}></input>
            <button className="btn-info" onClick={() => showPopup("edit")}><FaEdit/></button>
            <button className="btn-danger" onClick={() => showPopup("delete")}><MdDelete/></button>
            {/* // The popup for edit and delete buttons */}
            <div className="popup" id="editPopup">
                <input type="text" placeholder={task.text} value={editInput} onChange={handleEdit}></input>
                <button onClick={() => editHandler(task.id, editInput)}>confirm</button>
            </div>
            <div className="popup" id="deletePopup">
                <button onClick={() => deleteHandler(task.id)}>confirm</button>
                <button onClick={() => showPopup("delete")}>back</button>
            </div>
        </div>
    )
}

export default Task;