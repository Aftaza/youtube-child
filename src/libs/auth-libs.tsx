import { authOption } from '@/utils/authOptions' 
import { getServerSession } from 'next-auth'

export const authUserSession = async() => {
    const session = await getServerSession(authOption)
    return session?.user
}