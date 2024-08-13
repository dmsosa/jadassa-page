import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function EditTask({ index, text, editHandler, setEditMode }) {

    const [ input, setInput ] = useState(text);
    const handleChange = (e) => {
        setInput(e.currentTarget.value);
    };

    return (
        <div className="task edit-task">
            <div className="square">{index}</div>
            <input type="text" name="text" value={input} onChange={handleChange}/>
            <div className="edit-task-buttons">
                <button className="btn-primary" onClick={() => {
                    editHandler(text, input);  
                    setEditMode(false);
                    } }>Confirm</button>
                <button className="btn-danger" onClick={() => setEditMode(false)}>Discard</button>
            </div>
        </div>    

    )
}

export default EditTask;