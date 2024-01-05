import ListTasks from "@/components/ListTasks";
import SkeletonTasks from "@/components/SkeletonTasks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <nav className="w-full flex justify-end mt-10">
        <Button asChild>
          <Link href={'/create'}>New Task</Link>
        </Button>
      </nav>
      <br /><br />
      <Suspense fallback={<SkeletonTasks />}>
        <ListTasks />
      </Suspense>
    </>
  )
}
