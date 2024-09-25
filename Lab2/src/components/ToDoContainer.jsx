import { useState } from "react";
import SearchInput from "./SearchInput";
import AddToDoComponent from "./AddToDoComponent";
import ToDoTable from "./ToDoTable";

const ToDoContainer = () => {
  const [toDos, setToDos] = useState([]); // Список завдань
  const [title, setTitle] = useState(""); // Заголовок нового завдання
  const [searchQuery, setSearchQuery] = useState(""); // Пошуковий запит

  // Обробник зміни заголовка нового завдання
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Додавання нового завдання
  const handleSubmit = () => {
    if (!title.trim()) return; // Перевірка на порожній рядок
    const newToDo = {
      id: Date.now(), // Унікальний ID
      title,
    };
    setToDos([...toDos, newToDo]); // Додаємо нове завдання до списку
    setTitle(""); // Очищуємо поле вводу після додавання
  };

  // Оновлення завдання
  const updateTodo = (id, newTitle) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, title: newTitle } : toDo
      )
    );
  };

  // Видалення завдання
  const deleteTodo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  // Пошук завдань за заголовком
  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Пошукове поле */}
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Додавання нового завдання */}
      <AddToDoComponent
        title={title}
        onTitleChange={handleTitleChange}
        onSubmit={handleSubmit} // Важливо: Передаємо функцію додавання
      />
      {/* Таблиця завдань */}
      <ToDoTable
        toDos={filteredToDos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default ToDoContainer;