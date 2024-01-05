import { NextRequest, NextResponse } from "next/server"
import {prisma} from '@/lib/prisma'

export const GET = async () => {
  try {
    const tasks = await prisma.task.findMany({orderBy: {createdAt: 'desc'}})
    return NextResponse.json({
      ok: true,
      message: 'Tasks fetched',
      data: tasks
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()
    const newTask = await prisma.task.create({ data })

    if (newTask) {
      return NextResponse.json({
        ok: true,
        message: 'Task created',
        data: newTask
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}