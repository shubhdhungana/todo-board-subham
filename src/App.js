import "./App.css";
import "tailwindcss/tailwind.css";
import "./index.css";
import Board from "./components/Board";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">
          Todo Board Developed By Subham
        </h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px">
        {taskList.map((task, index) => {
          return <Board key={index} index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>;
        })}
      </div>
    </div>
  );
}

export default App;
