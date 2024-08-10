import { useMemo, useState } from "react";
import Task from "./Task";
function ToDo() {
    const [ category, setCategory ] = useState("all");
    const [ todoList, setTodoList ] = useState([]);
    const [ listCount, setListCount ] = useState(0);
    const [ inputText, setInputText ] = useState("");
    const [ expanded, setExpanded ] = useState(false);

    const listToRender = useMemo(() => {
        return todoList.filter( (task) => {
            switch(category) {
                case "all": {
                    return todoList;
                }
                case "pending": {
                    return !task.completed;
                }
                case "completed": {
                    return task.completed;
                }
            }
        })
    }, [todoList, setTodoList, category])
    const handleExpand = () => {
        setExpanded(!expanded);
    }

    const handleAdd = (text) => {
        const id = listCount;
        let task = { id: id, text: text, completed: false };
        setTodoList((prev) => [...prev, task]);
        setListCount(listCount+1);
    }
    const checkHandler = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id) { task = {...task, completed: !task.completed} };
            return task;
        }));
    }

    const editHandler = (id, text) => {
        todoList = todoList.map((task) => {
            if (task.id === id) { task.text = text };
            return task;
        })
        setTodoList(todoList);
    }
    const deleteHandler = (id) => {
        setTodoList(todoList.filter(task => task.id !== id));
    }

    return (
        // The input
        <div className="todoWrap">
            <div className="todo-header">
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value={"all"}>All</option>
                    <option value={"pending"}>Pending</option>
                    <option value={"completed"}>Completed</option>
                </select>
                <button className="btn btn-expand" onClick={handleExpand}>{"Add dreams >>"}</button>
                <div className="todo-input-wrap" >
                    <input 
                    className="todo-input"
                    type="text" 
                    placeholder="add a wonderful dream..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    autoComplete="off"
                    onKeyUp={(e) => {if (e.code.toLocaleLowerCase() === 'enter') { handleAdd(inputText)}}}></input>
                    <button className="btn btn-primary" onClick={() => handleAdd(inputText)}>confirm</button>
                </div>
            </div>
            <div className="todoList">
                {listToRender.map((task, index) => 
                    <Task
                    key={task.id}
                    task={task} 
                    index={index}
                    checkHandler={checkHandler} 
                    editHandler={editHandler} 
                    deleteHandler={deleteHandler}/>
                )}
            </div>
        </div>

    )
}

export default ToDo;