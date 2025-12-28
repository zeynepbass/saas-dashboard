

"use client"
import { useEffect, useState } from "react"
import { getCurrentUser } from "@/app/lib/auth"
import Sidebar from "@/app/components/layout/sidebar"
export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  if (!user) return null 

  return (
    <div className="flex">
      <Sidebar user={user} />
    <main className="flex-1 p-6">
      {children}
    </main>
    </div>
  )
}
