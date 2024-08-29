import { useMemo, useState } from "react";
import Task from "./Task";
import CustomSelect from "./CustomSelect";

function ToDoModal({ todoList, setTodoList }) {
  const [category, setCategory] = useState("all");
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  const listToRender = useMemo(() => {
    return todoList.filter((task) => {
      switch (category) {
        case "all": {
          console.log(todoList);
          return todoList;
        }
        case "pending": {
          return !task.completed;
        }
        case "completed": {
          return task.completed;
        }
        default: {
          return todoList;
        }
      }
    });
  }, [todoList, category]);

  const blurPage = () => {
    const page = document.querySelector(".todo-wrapper");
    page.classList.toggle("blur");
  };

  const toggleModal = () => {
    const modal = document.querySelector(".todo-modal");
    modal.classList.toggle("show");
    blurPage();
  };
  const handleAdd = (text) => {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].text === text) {
        setError(true);
        return;
      }
    }
    let task = { id: todoList.length + 1, text: text, completed: false };
    setTodoList((prev) => [...prev, task]);
  };
  const checkHandler = (text) => {
    setTodoList(
      todoList.map((task) => {
        if (task.text === text) {
          task = { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };
  const editHandler = (prevText, text) => {
    setTodoList(
      todoList.map((task) => {
        if (task.text === prevText) {
          task = { ...task, text: text };
        }
        return task;
      }),
    );
  };
  const deleteHandler = (text) => {
    setTodoList(todoList.filter((task) => task.text !== text));
  };
  return (
    <>
      <div className="todo-modal-button" onClick={toggleModal}>
        See all
      </div>
      <div className="todo-modal">
        <div className="todo-wrapper">
          <button className="btn btn-danger toggle-modal" onClick={toggleModal}>
            X
          </button>
          <div className="todo-header">
            <div className="title">Your list of dreams</div>
            <CustomSelect setCategory={setCategory} />
            <div className="todo-input-wrap">
              <input
                className="todo-input"
                type="text"
                placeholder="add a wonderful dream..."
                value={inputText}
                onChange={(e) => {
                  setError(false);
                  setInputText(e.target.value);
                }}
                autoComplete="off"
                onKeyUp={(e) => {
                  if (e.code.toLocaleLowerCase() === "enter") {
                    handleAdd(inputText);
                  }
                }}
              ></input>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (inputText && inputText.length > 0) {
                    handleAdd(inputText);
                  }
                }}
              >
                confirm
              </button>
            </div>
            <div className={`todo-error ${error ? "expanded" : ""}`}>
              That dream is already in your list!
            </div>
          </div>
          <div className="task-wrapper">
            {listToRender.map((task, index) => (
              <Task
                key={task.text}
                task={task}
                index={index + 1}
                checkHandler={checkHandler}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoModal;
