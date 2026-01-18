import { NextResponse } from 'next/server'

// Mock database
let items = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones",
    price: 129.99,
    category: "Electronics",
    rating: 4.5,
    reviews: 245
  }
]

export async function GET() {
  return NextResponse.json(items)
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Check authentication (in real app, verify token/cookie)
    const userCookie = request.cookies.get('user')
    
    if (!userCookie) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const newItem = {
      id: items.length + 1,
      ...body,
      createdAt: new Date().toISOString()
    }
    
    items.push(newItem)
    
    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    )
  }
}