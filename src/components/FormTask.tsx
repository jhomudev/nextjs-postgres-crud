'use client'

import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { createTask, updateTasks } from "@/services"
import { useToast } from "./ui/use-toast"
import { useRouter } from "next/navigation"
import React from "react"
import { Task } from "@/types/Task"

const FormSchema = z.object({
  title: z.string({required_error: 'Title is required'}).min(2, {
    message: "Title must be at least 2 characters."
  }),
  description: z.string({required_error: 'Title is required'}).min(2, {
    message: "Description must be at least 2 characters.",
  }),
})

type Props = {
  isEdit?: boolean
  task?: Task
}

function FormTask({task, isEdit = false}:Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: task?.title,
      description: task?.description
    }
  })
  const { toast } = useToast()
  const { push } = useRouter()
  const [isLoadingSubmit, setIsLoadingSubmit] = React.useState(false)

  const textButton = {
    edit: isLoadingSubmit ? 'Updating...' : 'Update',
    create: isLoadingSubmit ? 'Creating...' : 'Create',
  }

  const handleSubmitForm = form.handleSubmit(async (data )=> {
    setIsLoadingSubmit(true)
    const res = await (isEdit && task ? updateTasks(task.id, data) : createTask(data) )
    setIsLoadingSubmit(false)
    if (!res?.ok) {
      toast({
        title: 'Something went wrong.',
        description: res?.message,
        variant: 'destructive',
      })
    }

    toast({
      title: 'Operation successful.',
      description: res?.message
    })
  
    push('/')
  })

  return (
    <div className="w-[min(100%,500px)] mx-auto">
      <h2 className="text-lg mb-3">{isEdit ? 'Update' : 'Create a new'} task</h2>
      <Form {...form}>
        <form onSubmit={handleSubmitForm} >
          <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Write the title" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({field}) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write the description" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className={`mt-3 ${isLoadingSubmit && 'animate-pulse'}`} type="submit">{ isEdit ? textButton.edit : textButton.create}</Button>
        </form>
      </Form>
    </div>
  )
}
export default FormTask