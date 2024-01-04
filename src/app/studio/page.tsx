import { authUserSession } from '@/libs/auth-libs'
import { redirect } from 'next/navigation'

const App = async() => {
    const user = await authUserSession()
    if (user){
        redirect('/studio/dashboard')
    }else{
        redirect('/api/auth/signin')
    }
}

export default App