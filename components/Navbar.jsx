import React from 'react'
import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            Startify
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {session && session.user ? (
                            <>
                                {/* User Navigation */}
                                <div className="flex items-center space-x-1">
                                    <Link
                                        href="/dashboard"
                                        className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        Profile
                                    </Link>
                                </div>

                                {/* User Info & Sign Out */}
                                <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-semibold">
                                                {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-600 hidden lg:block">
                                            {session.user.name || session.user.email}
                                        </span>
                                    </div>
                                    <form action={async () => {
                                        "use server"
                                        await signOut({ redirectTo: "/" })
                                    }}>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                                        >
                                            Sign Out
                                        </button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <form
                                action={async () => {
                                    "use server"
                                    await signIn("google")
                                }}
                            >
                                <button
                                    type="submit"
                                    className="inline-flex items-center cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                                >
                                    <span className="mr-3 text-lg font-bold">
                                        <span className="text-blue-500">G</span>
                                        <span className="text-red-500">o</span>
                                        <span className="text-yellow-500">o</span>
                                        <span className="text-blue-500">g</span>
                                        <span className="text-green-500">l</span>
                                        <span className="text-red-500">e</span>
                                    </span>
                                    Sign in with Google
                                </button>

                            </form>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu (you can expand this with state management) */}
            <div className="md:hidden border-t border-gray-200 bg-white">
                <div className="px-4 py-2 space-y-1">
                    {session && session.user ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/profile"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                Profile
                            </Link>
                            <div className="pt-2 border-t border-gray-200">
                                <form action={async () => {
                                    "use server"
                                    await signOut({ redirectTo: "/" })
                                }}>
                                    <button
                                        type="submit"
                                        className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                            className="p-3"
                        >
                            <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border cursor-pointer border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                                >
                                    <span className="mr-3 text-lg font-bold">
                                        <span className="text-blue-500">G</span>
                                        <span className="text-red-500">o</span>
                                        <span className="text-yellow-500">o</span>
                                        <span className="text-blue-500">g</span>
                                        <span className="text-green-500">l</span>
                                        <span className="text-red-500">e</span>
                                    </span>
                                    Sign in with Google
                                </button>
                        </form>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar
