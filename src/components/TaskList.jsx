import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import AddTask from "./AddTask";

function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const handleTask = (task) => {
    setTaskList([...taskList, { task: task, id: uuidv4(), isDone: false }]);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const taskDone = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          if (task.isDone === false) {
            return { ...task, isDone: true };
          } else {
            return { ...task, isDone: false };
          }
        }
        return task;
      })
    );
  };

  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-gray-100 pt-10">
        <div className="container mx-auto px-4 py-40 max-w-lg">
          <AddTask handleTask={handleTask} />
          <div className="space-y-4 mt-6">
            {taskList.map((item, id) => (
              <Task
                task={item}
                key={id}
                deleteTask={deleteTask}
                taskDone={taskDone}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
