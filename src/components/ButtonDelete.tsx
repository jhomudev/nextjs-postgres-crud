'use client'
import React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { deleteTask } from "@/services"
import { Task } from "@/types/Task"
import { useToast } from "./ui/use-toast"

type Props = {
  task: Task
}

export function ButtonDelete({ task }: Props) {
  const [isLoadingSubmit, setIsLoadingSubmit] = React.useState(false)
  const [isOpenAlert, setIsOpenAlert] = React.useState(false)

  const {toast} = useToast()
  const handleDelete = async () => { 
    setIsLoadingSubmit(true)
    const res = await deleteTask(task.id)
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
    setIsOpenAlert(false)
  }

  return (
    <AlertDialog open={isOpenAlert} onOpenChange={setIsOpenAlert}>
      <AlertDialogTrigger asChild>
        <Button variant={'destructive'}>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently this task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button className={isLoadingSubmit ? 'animate-pulse' : ''} onClick={handleDelete}>{isLoadingSubmit ? 'Deleting...' : 'Delete'}</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
