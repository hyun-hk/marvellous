"use client"

import Link from "next/link"
import { Button } from "@/app/components/button"
import { Input } from "@/app/components/input"
import { Facebook, Github, Instagram, Twitter, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function SiteFooter() {
  const { setTheme } = useTheme()

  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 bg-white" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
            <span className="text-white font-bold">ACME</span>
          </div>
          <p className="mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Branding", "Data Analysis", "E-commerce Solutions", "Market Research"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Pricing Plans", "User Guides", "Tutorials", "Service Status"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {[
                "Our Story",
                "Latest News",
                "Career Opportunities",
                "Media Enquiries",
                "Collaborations",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Claim", "Privacy", "Terms", "User Agreement"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900 rounded-lg p-6 mb-12">
          <h3 className="text-white text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
          <p className="mb-4">
            Receive weekly updates with the newest insights, trends, and tools, straight to your email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="johndoe@email.com"
              className="bg-gray-800 border-gray-700 text-white"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p>© 2024 Acme Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setTheme("dark")}
              className="p-2 hover:text-white transition-colors"
            >
              <Moon size={20} />
            </button>
            <button
              onClick={() => setTheme("light")}
              className="p-2 hover:text-white transition-colors"
            >
              <Sun size={20} />
            </button>
            <button
              onClick={() => setTheme("system")}
              className="p-2 hover:text-white transition-colors"
            >
              <Monitor size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}