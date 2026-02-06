function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <span>{task.status}</span>
    </div>
  );
}

export default TaskCard;
