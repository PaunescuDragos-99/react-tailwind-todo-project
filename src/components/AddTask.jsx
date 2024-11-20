import { useState } from "react";

function AddTask({ handleTask }) {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleTask(task);
    setTask("");
  };

  return (
    <form className="w-full">
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What task do you need to do?"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button
          className="bg-slate-500 text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-all"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddTask;
