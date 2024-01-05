import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/lib/prisma'
import { Prisma } from "@prisma/client"

export const GET = async (_req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const {id} = params
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    })

    if (task) {
      return NextResponse.json({
        ok: true,
        message: 'Task fetched',
        data: task
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'Task not found'
    }, {status: 404})
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if(error.code === 'P2025') {
        return NextResponse.json({ ok: false, message: 'Task not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const {id} = params
    const { title, description } = await req.json()
    const taskUpdated = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, description }
    })
    if (taskUpdated) {
      return NextResponse.json({
        ok: true,
        message: 'Task updated',
        data: taskUpdated
      })
    }
    return NextResponse.json({ 
      ok: true,
      message: 'Task not updated',
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if(error.code === 'P2025') {
        return NextResponse.json({ ok: false, message: 'Task not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}

export const DELETE = async (_req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params
    const taskDeleted = await prisma.task.delete({
      where: { id: Number(id) }
    })
    if (taskDeleted) {
      return NextResponse.json({
        ok: true,
        message: 'Task deleted',
        data: taskDeleted
      })
    }
    return NextResponse.json({ 
      ok: true,
      message: 'Task not deleted',
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if(error.code === 'P2025') {
        return NextResponse.json({ ok: false, message: 'Task not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}
