function Task({ task, deleteTask, taskDone }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 m-3 max-w-md border rounded-lg shadow-md ${
        task.isDone ? "bg-gray-200 text-gray-500" : "bg-white"
      }`}
    >
      <p className={`text-lg font-medium ${task.isDone ? "line-through" : ""}`}>
        {task.task}
      </p>
      <div className="flex space-x-2">
        <button
          className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
          onClick={() => taskDone(task.id)}
        >
          Done
        </button>
        <button
          className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;