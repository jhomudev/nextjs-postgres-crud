import Link from "next/link"
import { title } from "process"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

function SkeletonTasks() {
  return (
    <ul className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {
        Array.from({ length: 5 }).map((_, id) => (
          <li key={id} className="w-full min-h-[150px] shadow-md rounded-md">
            <Card>
              <CardHeader>
                <CardTitle className="h-[18px] animate-pulse bg-zinc-800 border-md rounded-md" />
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                <p className="w-[90%] h-[18px] animate-pulse bg-zinc-800 border-md rounded-md"></p>
                <p className="h-[18px] animate-pulse bg-zinc-800 border-md rounded-md"></p>
              </CardContent>
              <CardFooter className="flex gap-2 items-center justify-end">
                <div className="w-[40%] h-[35px] animate-pulse bg-zinc-800 border-md rounded-md" />
              </CardFooter>
            </Card>
          </li>
        ))
      }
    </ul>
  )
}
export default SkeletonTasks