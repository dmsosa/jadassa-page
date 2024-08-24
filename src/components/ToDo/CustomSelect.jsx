import { useState } from "react";

function CustomSelect({ setCategory }) {
  const [selected, setSelected] = useState("all");
  const options = ["all", "completed", "pending"];

  const toggleSelect = (e) => {
    closeAll(e);
    e.currentTarget.classList.toggle("active");
    e.currentTarget.parentElement.classList.toggle("active");
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  const closeAll = (e) => {
    const selectElements = document.querySelectorAll(".select");
    let parent;
    if (e.currentTarget.parentElement.classList.contains("select")) {
      parent = e.currentTarget.parentElement;
    } else {
      parent = e.currentTarget.parentElement.parentElement;
    }
    for (let i = 0; i < selectElements.length; i++) {
      if (selectElements[i] !== parent) {
        selectElements[i].classList.remove("active");
        selectElements[i].firstChild.classList.remove("active");
        selectElements[i].firstChild.nextSibling.classList.remove("active");
      }
    }
  };
  const itemClick = (e) => {
    setSelected(e.currentTarget.innerText.toLowerCase());
    setCategory(e.currentTarget.innerText.toLowerCase());

    e.currentTarget.parentElement.classList.toggle("active");
    e.currentTarget.parentElement.previousSibling.classList.toggle("active");
  };
  return (
    <div className="select" name="todo">
      <div className="select-selected" onClick={toggleSelect}>
        {selected}
      </div>
      <div className="select-options">
        {options.map((option) => (
          <div key={option} className="select-item" onClick={itemClick}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomSelect;
