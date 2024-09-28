import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import AddToDoComponent from "./AddToDoComponent";
import ToDoTable from "./ToDoTable";
import useGetAllToDo from '../hooks/UseGetAllToDo';

const ToDoContainer = () => {
  const { isLoading, data, setData, error } = useGetAllToDo(); // Використання хука для отримання даних
  const [title, setTitle] = useState(""); // Заголовок нового завдання
  const [searchQuery, setSearchQuery] = useState(""); // Пошуковий запит

  useEffect(() => {
    // Якщо дані успішно завантажились, встановлюємо їх у стан
    if (data) {
      setData(data.slice(0, 10)); // Наприклад, беремо перші 10 завдань
    }
  }, [data]);

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
    setData([...data, newToDo]); // Додаємо нове завдання до списку
    setTitle(""); // Очищуємо поле вводу після додавання
  };

  // Оновлення завдання
  const updateTodo = (id, newTitle) => {
    setData(
      data.map((toDo) =>
        toDo.id === id ? { ...toDo, title: newTitle } : toDo
      )
    );
  };

  // Видалення завдання
  const deleteTodo = (id) => {
    setData(data.filter((toDo) => toDo.id !== id));
  };

  // Пошук завдань за заголовком
  const filteredToDos = data.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <p>Завантаження...</p>; // Можна додати індикатор завантаження
  }

  if (error) {
    return <p>Сталася помилка: {error.message}</p>; // Виведення помилки, якщо є
  }

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