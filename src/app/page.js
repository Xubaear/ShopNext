'use client'

import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '@/Context';

export default function Home() {
  const { user } = useContext(GlobalContext);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center text-white">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            Welcome to
            <span className="block text-yellow-300 mt-4">ShopNextTask</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Your premium destination for amazing products and exceptional shopping
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/items" className="btn btn-primary text-lg px-8 py-4">
              🛍️ Start Shopping
            </Link>
            {!user && (
              <Link href="/login" className="btn btn-secondary text-lg px-8 py-4">
                👤 Login
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-black text-center mb-16 text-gradient">
            Why Choose Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Lightning-fast shipping to your door</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Only the finest products for you</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Secure Shopping</h3>
              <p className="text-gray-600">Your data is always protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-8">
            Ready to Shop?
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers today
          </p>
          <Link href="/items" className="btn btn-primary text-xl px-12 py-4">
            🛍️ Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
}