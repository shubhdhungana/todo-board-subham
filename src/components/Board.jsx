import React from "react";

const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
      let removeIndex = taskList.indexOf(task);
      taskList.splice(removeIndex, 1);
      setTaskList((currentTasks => currentTasks.filter(todo=>index===removeIndex)))

    };
  return (
    <>
      {" "}
      <div className="max-w-xl flex flex-col items-center justify-center border text-lg">
        <p>{task}</p>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
