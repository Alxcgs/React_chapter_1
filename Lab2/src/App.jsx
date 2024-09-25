import PageTitle from "./components/PageTitle";
import ToDoContainer from "./components/ToDoContainer";
import "./App.css";

function App() {
  return (
    <div>
      {/* Заголовок сторінки */}
      <PageTitle title="ToDo List" />
      {/* Контейнер зі списком завдань */}
      <ToDoContainer />
    </div>
  );
}

export default App;