export type Task = {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export type TaskInput = Pick<Task, 'title' | 'description'>