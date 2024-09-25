import React from "react";

const AddToDOComponent = ({ title, onTitleChange, onSubmit }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault(); // Запобігає перезавантаженню сторінки
      onSubmit(); // Виклик функції додавання нового завдання
    }}>
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="Enter a new task"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default AddToDOComponent;