'use client'

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GlobalContext } from '@/lib/context';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const { login } = useContext(GlobalContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get registered users from localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Find user with matching email and password
      const user = registeredUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        const userData = { 
          id: user.id,
          name: user.name, 
          email: user.email 
        };
        const token = 'mock-jwt-token-' + user.id;
        
        login(userData, token);
        toast.success('Login successful! Welcome back!');
        router.push('/items');
      } else {
        toast.error('Invalid email or password. Please register first if you don\'t have an account.');
      }
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setDemoLoading(true);
    
    try {
      // Create demo user data
      const demoUser = {
        id: 999999,
        name: 'Demo User',
        email: 'ph@gmail.com',
        password: 'demo123',
        createdAt: new Date().toISOString()
      };

      // Get existing users and add demo user if not exists
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const existingDemo = registeredUsers.find(u => u.email === demoUser.email);
      
      if (!existingDemo) {
        registeredUsers.push(demoUser);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      }

      // Login the demo user
      const userData = { 
        id: demoUser.id,
        name: demoUser.name, 
        email: demoUser.email 
      };
      const token = 'mock-jwt-token-' + demoUser.id;
      
      login(userData, token);
      toast.success('Demo login successful! Welcome to ShopNextTask! 🎉');
      router.push('/items');
    } catch (error) {
      toast.error('Demo login failed');
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">ShopNextTask</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Sign in to Your Account
          </h2>
          <p className="text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-lg disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Login Section - Moved below sign in */}
          <div className="mt-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or try demo access</span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2 text-center">Quick Demo Access</h3>
              <p className="text-blue-800 text-sm mb-3 text-center">
                Try the platform instantly with our demo account
              </p>
              <button
                onClick={handleDemoLogin}
                disabled={demoLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium"
              >
                {demoLoading ? 'Logging in...' : ' Demo Login'}
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}