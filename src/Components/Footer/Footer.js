export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-2xl font-bold">NextShop</span>
            </div>
            <p className="text-gray-400">
              Your one-stop shop for all modern products. Quality guaranteed with next-day delivery.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li href="/" className="text-gray-400 hover:text-white">Home</li>
              <li href="/items" className="text-gray-400 hover:text-white">Products</li>
              <li href="/about" className="text-gray-400 hover:text-white">About Us</li>
              <li href="/contact" className="text-gray-400 hover:text-white">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home & Kitchen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@nextshop.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: 123 Street, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NextShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}