import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todos/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Todos
      </h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-white rounded shadow-md hover:bg-gray-100 transition"
          >
            <span className="text-gray-700 text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
