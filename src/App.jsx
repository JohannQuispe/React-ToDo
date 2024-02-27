import { TaskList } from "./Tasks/Task";
import { TaskForm } from "./Tasks/TaskForm";
function App() {
  /* cuando cargue el componente que se carguen los datos a traves del useEffect */

  return (
    <main className="bg-zinc-900">
      <div className="container mx-auto p-10 ">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
