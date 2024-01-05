import Link from "next/link"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Task } from "@/types/Task"
import { ButtonDelete } from "./ButtonDelete"


type Props = {
  task: Task
}

function TaskCard({ task }: Props) {
  const { id, description, title } = task
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ title }</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="h-[48px] line-clamp-2">{ description }</p>
      </CardContent>
      <CardFooter className="flex gap-2 items-center justify-end">
        <Button variant={'outline'} asChild ><Link href={`/${id}/edit`}>Edit</Link></Button>
        <ButtonDelete task={task}/>
      </CardFooter>
    </Card>
  )
}
export default TaskCard