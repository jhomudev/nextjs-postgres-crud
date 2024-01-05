import FormTask from "@/components/FormTask"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons";

function CreateTaskPage() {
  return (
    <div>
      <Button variant={'link'} asChild>
        <Link href={'/'}><ArrowLeftIcon /> &nbsp; Back</Link>
      </Button>
      <br />
      <FormTask />
    </div>
  )
}
export default CreateTaskPage