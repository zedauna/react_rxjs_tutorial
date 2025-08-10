import TaskItem from "./TaskItem";
import {useTasksCustom } from "./rxjs.js";

const TasksList = () => {
  const tasks = useTasksCustom()

  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
