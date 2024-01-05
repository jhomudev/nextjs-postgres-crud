'use server'
import { Task } from "@/types/Task"

const getTasks = async (): Promise<Task[] | undefined> => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {next: {tags: ['tasks']}})
    const {ok, message, data} = await res.json()
    if(ok) return data
    console.error(message)
  } catch (error) {
    console.error('Error to fetch tasks', error)
  }
}

export default getTasks