import { getTasks } from "../services/taskService";
import TaskCard from "../components/TaskCard";

function TaskDashboard() {
  const tasks = getTasks();

  return (
    <div>
      <h1>Task Manager</h1>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskDashboard;
