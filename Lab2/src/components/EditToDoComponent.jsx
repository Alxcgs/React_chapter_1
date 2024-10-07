import React, { useState } from "react";

const EditToDoComponent = ({ initialTitle, onSave }) => {
  const [editTitle, setEditTitle] = useState(initialTitle);

  const handleSave = () => {
    onSave(editTitle);
  };

  return (
    <div>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <button onClick={handleSave} className="save-btn">
        Save
      </button>
    </div>
  );
};

export default EditToDoComponent;