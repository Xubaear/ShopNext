'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingBag } from 'lucide-react'

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={item.image || '/placeholder.jpg'}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.featured && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{item.name}</h3>
          <span className="text-blue-600 font-bold">{item.price} Taka</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({item.reviews})</span>
          </div>
          <span className="text-sm text-green-600 font-medium">In Stock</span>
        </div>
        
        <div className="flex space-x-2">
          <Link
            href={`/items/${item.id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
          >
            View Details
          </Link>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}