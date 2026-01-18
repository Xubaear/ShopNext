'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const userCookie = Cookies.get('user')
    if (userCookie) {
      try {
        setUser(JSON.parse(userCookie))
      } catch (error) {
        Cookies.remove('user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock authentication
    const mockUsers = [
      { email: 'admin@nextshop.com', password: 'admin123', name: 'Admin User' },
      { email: 'user@nextshop.com', password: 'user123', name: 'Test User' }
    ]

    const user = mockUsers.find(
      u => u.email === email && u.password === password
    )

    if (user) {
      const userData = { 
        email: user.email, 
        name: user.name,
        isAuthenticated: true 
      }
      Cookies.set('user', JSON.stringify(userData), { expires: 7 })
      setUser(userData)
      return { success: true, user: userData }
    }

    return { success: false, message: 'Invalid credentials' }
  }

  const logout = () => {
    Cookies.remove('user')
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}