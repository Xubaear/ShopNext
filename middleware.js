import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  const userCookie = request.cookies.get('user')

  // Protect add-item route
  if (pathname.startsWith('/add-item') && !userCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to items if logged in user tries to access login or register
  if ((pathname === '/login' || pathname === '/register') && userCookie) {
    return NextResponse.redirect(new URL('/items', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/add-item', '/login', '/register']
}