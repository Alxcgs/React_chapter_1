import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import AddToDoComponent from "./AddToDoComponent";
import ToDoTable from "./ToDoTable";
import Loader from "./Loader";
import useGetAllToDo from "../hooks/UseGetAllToDo";

const ToDoContainer = () => {
  const { isLoading, data, setData, error } = useGetAllToDo();
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    const newToDo = {
      id: Date.now(),
      title,
    };
    setData([...data, newToDo]);
    setTitle("");
  };

  const updateTodo = (id, newTitle) => {
    setData(data.map((toDo) => (toDo.id === id ? { ...toDo, title: newTitle } : toDo)));
  };

  const deleteTodo = (id) => {
    setData(data.filter((toDo) => toDo.id !== id));
  };

  const filteredToDos = data.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Loader isLoading={isLoading}>
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      <AddToDoComponent
        title={title}
        onTitleChange={handleTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={filteredToDos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      {error && <p>Сталася помилка: {error.message}</p>}
    </Loader>
  );
};

export default ToDoContainer;