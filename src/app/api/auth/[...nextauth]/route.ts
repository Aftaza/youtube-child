import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"

export const AuthOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(AuthOption)

export {handler as GET, handler as POST}