import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Shield, 
  Truck, 
  Headphones, 
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Free delivery on orders over $50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payment",
      description: "100% secure payment processing"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Prices",
      description: "Guaranteed lowest prices"
    }
  ]

  const categories = [
    { name: "Electronics", count: 245, color: "bg-blue-500" },
    { name: "Fashion", count: 189, color: "bg-pink-500" },
    { name: "Home & Kitchen", count: 156, color: "bg-green-500" },
    { name: "Sports", count: 98, color: "bg-orange-500" },
    { name: "Books", count: 76, color: "bg-purple-500" },
    { name: "Toys", count: 54, color: "bg-red-500" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Shop the Latest Trends with <span className="text-yellow-300">NextShop</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover amazing products at unbeatable prices. Quality meets affordability in our curated collection.
              </p>
              <div className="flex space-x-4">
                <Link href="/items" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                  Shop Now <ArrowRight className="inline ml-2" />
                </Link>
                <Link href="/about" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/hero-image.png"
                alt="Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NextShop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="text-center group cursor-pointer">
                <div className={`${category.color} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}>
                  {category.count}+
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-blue-200">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  'Amazing shopping experience! The products are top quality and delivery was super fast.'
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-500">Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first order plus exclusive deals and updates.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field rounded-r-none"
            />
            <button
              type="submit"
              className="btn-primary rounded-l-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers today
          </p>
          <Link
            href="/items"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </>
  )
}