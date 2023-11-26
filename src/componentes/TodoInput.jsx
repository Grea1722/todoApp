import React from "react";

export const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Agregar tarea"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
};
