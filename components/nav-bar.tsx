"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🍀</span>
              <span className="font-bold text-xl">
                <span className="text-green-500">Lucky</span> <span className="text-yellow-500">Charm</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              Token
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              Lottery
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              Governance
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              NFT
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Buy $CHARM</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-green-500/30">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#"
              className="block text-gray-300 hover:text-green-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Token
            </Link>
            <Link
              href="#"
              className="block text-gray-300 hover:text-green-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lottery
            </Link>
            <Link
              href="#"
              className="block text-gray-300 hover:text-green-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Governance
            </Link>
            <Link
              href="#"
              className="block text-gray-300 hover:text-green-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              NFT
            </Link>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Buy $CHARM</Button>
          </div>
        </div>
      )}
    </header>
  )
}
