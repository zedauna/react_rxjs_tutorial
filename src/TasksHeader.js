import { useEffect, useState } from "react";
import { task$ } from "./rxjs.js";
import { map } from "rxjs";

const TasksHeader = () => {
  
  const [undoneTasks, setUndoneTasks] = useState(0);

  useEffect(()=>{
    // task$.subscribe(newTasks => {
    //   setUndoneTasks(newTasks.filter((t) => t.done === false).length)
    // });

    task$
    .pipe(map(newTasks =>newTasks.filter((t) => t.done === false).length))
    .subscribe(length => setUndoneTasks(length));
  },[]);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
