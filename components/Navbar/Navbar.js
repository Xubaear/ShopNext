'use client'

import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/lib/context";

export default function Navbar() {
    const router = useRouter();
    const { user, logout } = useContext(GlobalContext);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Exact match to your image */}
                    <Link href="/" className="flex items-center gap-2">
                        
                        <span className="text-xl font-bold text-gray-900">ShopNext</span>
                    </Link>

                    {/* Navigation Links - Exact match */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                            Home
                        </Link>
                        <Link href="/items" className="text-gray-600 hover:text-gray-900 font-medium">
                            Items List
                        </Link>
                        
                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 text-sm">Welcome, {user.name || user.email}</span>
                                {/* <Link href="/add-item" className="btn-primary">
                                    Add Item
                                </Link> */}
                                <button 
                                    onClick={handleLogout}
                                    className="text-gray-600 hover:text-red-500 font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/register" className="text-gray-600 hover:text-gray-900 font-medium">
                                    Register
                                </Link>
                                <Link href="/login" className="btn-primary">
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}