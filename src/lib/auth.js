import users from "@/data/users.json"

export function getCurrentUser() {
  if (typeof window === "undefined") return null 

  const email = localStorage.getItem("session_email")
  const user = users.find(u => u.email === email)

  return user || { id: null, name: "Guest", email: null, role: "USER" }
}
