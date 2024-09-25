import React from "react";

const DeleteToDoComponent = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="delete-btn">
      Delete
    </button>
  );
};

export default DeleteToDoComponent;