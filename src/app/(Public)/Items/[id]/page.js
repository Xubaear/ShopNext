import Image from 'next/image'
import { Star, Truck, Shield, RotateCcw } from 'lucide-react'

// Mock data - in real app, fetch from API based on id
const getItemDetails = (id) => {
  const items = {
    1: {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life. Features advanced ANC technology, crystal clear calls, and comfortable over-ear design.",
      price: 129.99,
      rating: 4.5,
      reviews: 245,
      image: "/products/headphones.jpg",
      category: "Electronics",
      specifications: {
        "Battery Life": "30 hours",
        "Connectivity": "Bluetooth 5.2",
        "Noise Cancellation": "Active",
        "Weight": "265g",
        "Warranty": "2 years"
      }
    }
  }
  return items[id] || items[1]
}

export default function ItemDetailsPage({ params }) {
  const item = getItemDetails(params.id)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="text-blue-600 font-semibold">{item.category}</span>
              <h1 className="text-3xl font-bold mt-2">{item.name}</h1>
              
              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({item.reviews} reviews)</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">${item.price}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(item.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-semibold ml-2">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="btn-primary flex-1">
                Add to Cart
              </button>
              <button className="btn-secondary flex-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}