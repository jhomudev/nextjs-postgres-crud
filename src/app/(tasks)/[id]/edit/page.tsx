import FormTask from "@/components/FormTask"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { getTaskById } from "@/services";

async function EditTaskPage({params}: {params: {id: string}}) {
  const { id } = params
  const res = await getTaskById(Number(id))

  return (
    <>
      <div>
        <Button variant={'link'} asChild>
          <Link href={'/'}><ArrowLeftIcon /> &nbsp; Back</Link>
        </Button>
        <br />
        {
          res?.data 
            ? <FormTask isEdit task={res.data} />
            : <p className="text-xl text-center mt-10">Task not found</p>
        }
      </div>
    </>
  )
}
export default EditTaskPage


