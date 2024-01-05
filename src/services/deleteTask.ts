'use server'
import { ApiResponse } from "@/types/Api"
import { Task } from "@/types/Task"
import { revalidateTag } from "next/cache"

const deleteTask = async (taskId: number): Promise<ApiResponse<Task> | undefined> => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`, {
      method: 'DELETE'
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

export default deleteTask