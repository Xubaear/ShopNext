'use client'

import { useEffect, useState, useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchProductById } from '@/lib/utils';
import { GlobalContext } from '@/lib/context';
import { toast } from 'react-toastify';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(params.id);
        setProduct(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (params.id) {
      loadProduct();
    }
  }, [params.id]);

  const handleBuyNow = () => {
    if (!user) {
      toast.error('Please register or login to purchase products');
      router.push('/register');
      return;
    }
    
    // Simulate purchase
    toast.success(`Successfully purchased ${quantity} x ${product.name}! 🎉`);
  };

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please register or login to add items to cart');
      router.push('/register');
      return;
    }
    
    // Simulate add to cart
    toast.success(`Added ${quantity} x ${product.name} to cart! 🛒`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link href="/items" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/items" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              {product.category}
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-500 mr-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-lg font-semibold">{product.rating}</span>
              <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>
            
            <div className="text-4xl font-black text-blue-600 mb-8">
              {product.price} Taka
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <span className="text-lg font-semibold mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Login Required Notice */}
            {!user && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <span className="font-semibold">Registration Required:</span> You need to register or login to purchase products.{' '}
                  <Link href="/register" className="text-blue-600 hover:text-blue-700 underline">
                    Create account now
                  </Link>
                </p>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="btn-secondary flex-1 py-4 text-lg"
              >
                🛒 Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="btn-primary flex-1 py-4 text-lg"
              >
                💝 Buy Now
              </button>
            </div>
            
            {/* Product Features */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🚚</div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-gray-600">On orders over 50 Taka</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">↩️</div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-sm text-gray-600">30-day return policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}