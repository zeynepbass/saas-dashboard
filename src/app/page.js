import { redirect } from "next/navigation"
import { getCurrentUser } from "@/app/lib/auth"

export default async function HomePage() {
  const user = await getCurrentUser()

  if (user && user.email) {
    redirect("/dashboard")
  } else {
    redirect("/login")
  }
}
