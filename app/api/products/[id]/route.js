import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: "Eco Water Bottle",
    description: "Sustainable stainless steel water bottle",
    price: 349,
    image: "https://i.ibb.co/7dxfzPWP/sara-groblechner-h10-NIm-YZHs-unsplash.jpg",
    category: "Eco-Products",
    rating: 4.8,
    reviews: 256
  },
  {
    id: 2,
    name: "Bamboo Cutting Board",
    description: "Natural bamboo cutting board",
    price: 299,
    image: "https://i.ibb.co/mVYSFHpw/71g9b-Yx-FVLL-AC-SL1500.jpg",
    category: "Home & Garden",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Organic T-Shirt",
    description: "Comfortable organic cotton t-shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    rating: 4.7,
    reviews: 342
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 189
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Non-slip eco-friendly yoga mat",
    price: 799,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    category: "Sports & Fitness",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 6,
    name: "Coffee Mug Set",
    description: "Ceramic coffee mug set of 4 with beautiful designs",
    price: 649,
    image: "https://i.ibb.co/rGnktmg0/R.png",
    category: "Home & Garden",
    rating: 4.3,
    reviews: 94
  },
  {
    id: 7,
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with bass boost",
    price: 1299,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 267
  },
  {
    id: 9,
    name: "Leather Wallet",
    description: "Genuine leather wallet with RFID protection",
    price: 899,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.7,
    reviews: 178
  },
  {
    id: 10,
    name: "Plant Pot Set",
    description: "Set of 3 ceramic plant pots with drainage holes",
    price: 549,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    category: "Home & Garden",
    rating: 4.4,
    reviews: 123
  }
];

export async function GET(request, { params }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return NextResponse.json(
      { success: false, message: "Product not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    success: true,
    data: product
  });
}
