import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  function handleSubmit(event) {
    event.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="mx-auto text-center text-white text-2xl font-bold pb-2">
          Agregar Tareas
        </h1>
        <input
          placeholder="Escribe la tarea"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escriba la descripcion"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-green-800 px-3 py-1 rounded-md text-white hover:bg-yellow-600">
          Guardar Tarea
        </button>
      </form>
    </div>
  );
}
