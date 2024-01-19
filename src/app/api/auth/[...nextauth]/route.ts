import NextAuth from "next-auth"
import { AuthOption } from "./authOption"

const handler = NextAuth(AuthOption)

export {handler as GET, handler as POST}