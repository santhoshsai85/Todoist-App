import React from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router";
import { upsert } from "../api/TaskService";
import { initTask } from "./Home";

const TaskModalForm = ({ isOpen, setIsOpen, task, setTask }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    upsert(task).then((response) => {
      setIsOpen(false);
      setTask(initTask);
      navigate("/");
    });
  };

  const handleCancel = () => {
    setIsOpen(false);
    setTask(initTask);
  };
  
  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <div className="flex justify-center h-full">
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-2/3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              required
              type="type"
              name="name"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Task Name"
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              value={task.name}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Description
            </span>
            <textarea
              name="description"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              value={task.description}
            />
          </label>
          <div className="flex flex-row justify-center gap-1">
            <button className="mt-2 p-1 bg-green-500  rounded-md" type="submit">
              Save
            </button>
            <button
              type="button"
              className="mt-2 p-1 bg-red-500  rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default TaskModalForm;
