import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
export const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <div className="text-white">No hay elementos en la Lista</div>;
  }
  return (
    <div className="grid sm:grid-cols-4 gap-2 md:grid-cols-4 grid-cols-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
