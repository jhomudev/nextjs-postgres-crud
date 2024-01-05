'use server'
import { ApiResponse } from "@/types/Api"
import { Task, TaskInput } from "@/types/Task"
import { revalidateTag } from "next/cache"

const createTask = async (taskData: TaskInput): Promise<ApiResponse<Task> | undefined> => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    const data = await res.json()
    if(!data.ok) console.error(data.message)
    else {
      revalidateTag('tasks')
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export default createTask