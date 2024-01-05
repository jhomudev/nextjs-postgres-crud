'use server'
import { ApiResponse } from "@/types/Api"
import { Task } from "@/types/Task"

const getTaskById = async (taskId: number): Promise<ApiResponse<Task> | undefined> => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`)
    const data = await res.json()
    if(data.ok) return data
    console.error(data.message)
  } catch (error) {
    console.error(error)
  }
}

export default getTaskById