import { useState } from "react";
import ToDo from "../components/ToDo/ToDo";
import ToDoModal from "../components/ToDo/ToDoModal";

function TraumPage() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="page traum-page">
      <ToDo todoList={todoList} setTodoList={setTodoList} />
      <ToDoModal todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default TraumPage;
