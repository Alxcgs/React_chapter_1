import React, { useState } from "react";
import EditToDoComponent from "./EditToDoComponent";
import DeleteToDoComponent from "./DeleteToDoComponent";

const ToDoTable = ({ toDos, updateTodo, deleteTodo }) => {
  const [editId, setEditId] = useState(null);

  const handleEditSave = (id, newTitle) => {
    updateTodo(id, newTitle);
    setEditId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id.toString()}>
            <td>{toDo.id.toString()}</td>
            <td>
              {editId === toDo.id ? (
                <EditToDoComponent
                  initialTitle={toDo.title}
                  onSave={(newTitle) => handleEditSave(toDo.id, newTitle)}
                />
              ) : (
                toDo.title
              )}
            </td>
            <td>
              {editId !== toDo.id && (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => setEditId(toDo.id)}
                  >
                    Edit
                  </button>
                  <DeleteToDoComponent onDelete={() => deleteTodo(toDo.id)} />
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;