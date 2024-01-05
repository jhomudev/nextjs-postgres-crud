import { getTasks } from "@/services"
import { Task } from "@/types/Task"
import TaskCard from "./TaskCard"

async function ListTasks() {
  const tasks = await getTasks()
  const noTasks = tasks?.length === 0
  if (noTasks) return <p>No tasks found</p>
  return (
    <ul className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {tasks?.map((task) => (
        <li key={task.id}>
          <TaskCard task={task}/>
        </li>
      ))}
    </ul>
  )
}
export default ListTasks