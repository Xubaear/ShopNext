import { NextResponse } from 'next/server'

let items = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones",
    price: 129.99,
    category: "Electronics"
  }
]

export async function GET(request, { params }) {
  const item = items.find(item => item.id === parseInt(params.id))
  
  if (!item) {
    return NextResponse.json(
      { error: 'Item not found' },
      { status: 404 }
    )
  }
  
  return NextResponse.json(item)
}