import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const tasks = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Ménage !", done: true },
];

export const task$ = new BehaviorSubject(tasks);

export const addTask = (text) => {
  tasks.push({
    id: Date.now(),
    text,
    done: false,
  });

  task$.next(tasks);
};

export const deleteTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
    task$.next(tasks);
  }
};

export const toggleTask = (id) => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;

    task$.next(tasks);
  }
};

export const useTasksCustom = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
      task$.subscribe(newTasks => setTasks([...newTasks]))
    },[]);

    return tasks
}