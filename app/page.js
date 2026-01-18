'use client'

import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '@/lib/context';

export default function Home() {
  const { user } = useContext(GlobalContext);

  return (
    <div>
      {/* Hero Section - Exact match to your image */}
      <section className="hero-bg text-white min-h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Shop Smart. Live Better.
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Best quality products at the best price
              </p>
              <div className="flex gap-4">
                <Link href="/items" className="btn-primary">
                  Browse Items
                </Link>
                <Link href="/register" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="text-center">
              {/* Box illustration matching your image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              
                {/* <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-orange-200 rounded flex items-end justify-center pb-2">
                      <div className="w-8 h-8 bg-orange-400 rounded"></div>
                    </div>
                    <div className="h-20 bg-orange-300 rounded flex items-end justify-center pb-2">
                      <div className="w-8 h-10 bg-orange-500 rounded"></div>
                    </div>
                    <div className="h-12 bg-orange-400 rounded flex items-end justify-center pb-2">
                      <div className="w-8 h-6 bg-orange-600 rounded"></div>
                    </div>
                  </div>
                </div> */}
                <div>
                  <img src='https://i.ibb.co.com/ynHNSmPc/Gemini-Generated-Image-ru94bhru94bhru94-1.png'
                  className='rounded-2xl'
                  />
                </div>
                

              </div>
            </div>

          </div>
        </div>
      </section>








      {/* Features Section - Exact match */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <span>🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Rating Fast (Week)</h3>
              <p className="text-gray-600">
                Direct fast Rating in whatever<br />you want and need it.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <span>🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Privacy</h3>
              <p className="text-gray-600">
                Secure Privacy and works with latest<br />technology and commercial.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <span>📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Manage & Add Items (Delivered)</h3>
              <p className="text-gray-600">
                Manage in Distributed whatever<br />you want and delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Exact match */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://i.ibb.co.com/bMcVTMrW/Chat-GPT-Image-Jan-18-2026-05-16-43-PM.png" 
                alt="About" 
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Project</h2>
              <p className="text-gray-600 mb-6">
               Welcome to ShopNext – where quality meets convenience. We are dedicated to providing a curated selection of premium products that cater to your unique lifestyle. Our mission is to simplify online shopping by bringing the best trends and everyday essentials directly to your fingertips at affordable prices.
              </p>
              <p className="text-gray-600 mb-8">
             At ShopNext, customer satisfaction is at the heart of everything we do. We prioritize a seamless shopping experience with easy navigation, secure transactions, and fast delivery. Whether you are exploring new arrivals or buying necessities, we ensure a smooth, reliable, and hassle-free journey from click to doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Exact match */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <span>🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">1. Browse Policy</h3>
              <p className="text-gray-600">
                Browse items in market → Browse<br />Policy and Items.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <span>🔐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">2. Login Securely</h3>
              <p className="text-gray-600">
                Login Securely in market and get open<br />access on commercial function in the web.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon mx-auto">
                <span>⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Manage & Add Items</h3>
              <p className="text-gray-600">
                Manage & Add Items in commercial<br />requirement, 3. Manage & add Items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Exact match */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">User's Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6">
                "Manage Your Items with Ease to help your ecommerce to 
                work Add to work, new designed to market your items 
                and whatever you want."
              </p>
              <div className="flex items-center gap-3">
              
                <div>
                  <div className="font-semibold">John</div>
                  <div className="text-sm text-gray-500">Software Developer</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6">
                "Manage Your Items with fast review people with 
                our practice, it interested fast help with commercial 
                and whatever you want in your sessions."
              </p>
              <div className="flex items-center gap-3">
                
                <div>
                  <div className="font-semibold">Sarah</div>
                  <div className="text-sm text-gray-500">Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Exact match */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing/Plans Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="pricing-card">
              <h3 className="text-2xl font-bold mb-4">Public Access (Free)</h3>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Public Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Public Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Login Securely
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Member Add Items
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Basic & fast Items
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Premium Access (commercial)
                </li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3 className="text-2xl font-bold mb-2">Member Access</h3>
              <div className="text-sm text-gray-500 mb-4">Member Access</div>
              <div className="text-4xl font-bold mb-8">OR</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Public Access (Infinity)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Member Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Manage & Add Items
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Premium online (commercial)
                </li>
              </ul>
              <button className="btn-primary w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Exact match */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your ecommerce or online or web fast and add listing 
            commercial to successful.
          </p>
          <Link href="/register" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}