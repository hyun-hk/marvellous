"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "../lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Customers", href: "/customers" },
  { name: "About Us", href: "/about" },
  { name: "Integrations", href: "/integrations" },
]

export function SiteHeader() {
  return (
    <div className="w-full flex justify-center py-4">
      {/* Sticky Container */}
      <div className="fixed top-4 z-50 w-full max-w-4xl px-4">
        <header className="flex items-center justify-between w-full px-6 py-3 bg-gradient-to-b from-white to-gray-50/80 rounded-full 
          shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] 
          hover:shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)] 
          transition-all duration-300 border border-gray-100/80 backdrop-blur-sm">
          <div className="relative flex items-center">
            <Link 
              href="/" 
              className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-md transition-transform hover:scale-105 hover:-rotate-3"
            >
              <div className="absolute inset-0 rounded-xl shadow-inner opacity-30" />
              <div 
                className="w-5 h-5 bg-black transform group-hover:rotate-12 transition-transform duration-300" 
                style={{ 
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))"
                }}
              />
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group hover:-translate-y-0.5",
                  item.name === "Customers" 
                    ? "text-black"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          <div className="relative">
            <Link
              href="/login"
              className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-gray-200 to-gray-100 px-6 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 border border-gray-200/50"
            >
              <div className="absolute inset-0 rounded-xl shadow-inner opacity-20" />
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </div>
        </header>
      </div>
      {/* Spacer to prevent content jump when header becomes fixed */}
      <div className="w-full h-[72px]" />
    </div>
  )
}