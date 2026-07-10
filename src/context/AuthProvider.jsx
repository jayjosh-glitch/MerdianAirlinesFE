import { useState } from 'react'
import AuthContext from './AuthContext'


const AuthProvider = ({ children }) => {

    const [isloggedin, setisloggedin] = useState(() => {
        return localStorage.getItem('isloggedin') === 'true'
    })

    const [currentuser, setcurerntuser] = useState(() => {
        const saveduser = localStorage.getItem('currentuser');
        return saveduser ? JSON.parse(saveduser) : null;
    })
    
    const login = (user) => {
        if (user) {
            setisloggedin(true)
            setcurerntuser(user)
            console.log(user.userId)
            console.log(user.token)
            localStorage.setItem('token', user.token)
            localStorage.setItem('isloggedin', 'true')
            localStorage.setItem('currentuser', JSON.stringify(user))
        } else if (!user || user === null) {
            localStorage.setItem('isloggedin', 'false')
        }
    }

    const logout = () => {
        setisloggedin(false)
        setcurerntuser(null)
        localStorage.removeItem('isloggedin')
        localStorage.removeItem('currentuser')
        localStorage.removeItem('token')
        
    }

    const register = (user) => {
        if (user) {
            setisloggedin(true)
            setcurerntuser(user)
            console.log(user)
            localStorage.setItem('token', user.token)
            localStorage.setItem('isloggedin', 'true')
            localStorage.setItem('currentuser', JSON.stringify(user))
        } else if (!user || user === null) {
            localStorage.setItem('isloggedin', 'false')
        }
    }

    return (
        <AuthContext.Provider value={{ isloggedin, currentuser, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider