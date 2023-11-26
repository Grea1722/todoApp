import { useState } from "react";
import "./App.css";
import { TodoInput } from "./componentes/TodoInput";
import { TodoList } from "./componentes/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //Funcion para guardar una nueva tarea
  const addTodo = () => {
    //validamos que el input no este vacio
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    //filtramos todos los todo que sean diferentes al ultimo que enviamos
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <>
      <div className="app">
        <h1>TodoApp</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo} />

        {todos?.length > 0 ? (
          <button
            onClick={clearAll}
            className="delete-button"
            style={{ marginTop: 10 }}
          >
            Borrar Lista
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
