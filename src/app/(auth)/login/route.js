import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    // Mock authentication
    const mockUsers = [
      { email: 'admin@nextshop.com', password: 'admin123', name: 'Admin User' },
      { email: 'user@nextshop.com', password: 'user123', name: 'Test User' }
    ]

    const user = mockUsers.find(
      u => u.email === email && u.password === password
    )

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const userData = {
      email: user.email,
      name: user.name,
      isAuthenticated: true
    }

    const cookieStore = cookies()
    cookieStore.set('user', JSON.stringify(userData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    })

    return NextResponse.json(userData)
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}