import { AuthOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export const authUserSession = async() => {
    const session = await getServerSession(AuthOption)
    return session?.user
}