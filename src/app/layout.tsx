import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Prisma CRUD',
  description: 'Next Postgres CRUD app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div className="min-h-screen w-full">
          <div className='w-full container mx-auto'>
            <div className='flex flex-col gap-1 text-center w-full max-w-screen-md mx-auto pt-20'>
              <h1 className='text-xl'>CRUD NEXT JS & PRISMA - shadcdn</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus atque similique neque maiores, reprehenderit ipsam excepturi porro sunt fugiat impedit odio! Atque molestiae adipisci numquam iure quaerat labore culpa?</p>
            </div>
            <main>
              {children}
            </main>
          </div>
          <Toaster />
        </div>
      </body>
    </html>
  )
}
