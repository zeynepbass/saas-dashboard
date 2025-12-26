"use client"

import Link from "next/link"
import { hasPermission } from "@/app/lib/permissions"

export default function Sidebar({ user }) {

  return (
    <aside className="w-64 min-h-screen border-r bg-background p-4">
     

      <nav className="space-y-2">
        {hasPermission(user.role, "dashboard.view") && (
          <Link
            href="/dashboard"
            className="block rounded px-3 py-2 text-sm hover:bg-muted"
          >
            Dashboard
          </Link>
        )}

        {hasPermission(user.role, "users.view") && (
          <Link
            href="/users"
            className="block rounded px-3 py-2 text-sm hover:bg-muted"
          >
            Users
          </Link>
        )}

        {hasPermission(user.role, "analytics.view") && (
          <Link
            href="/analytics"
            className="block rounded px-3 py-2 text-sm hover:bg-muted"
          >
            Analytics
          </Link>
        )}

        {hasPermission(user.role, "settings.edit") && (
          <Link
            href="/settings"
            className="block rounded px-3 py-2 text-sm hover:bg-muted"
          >
            Settings
          </Link>
        )}
      </nav>
    </aside>
  )
}
