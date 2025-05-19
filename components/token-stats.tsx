"use client"

import { useEffect, useState } from "react"
import { DollarSign, BarChart3, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

interface TokenData {
  price: number
  marketCap: number
  isLoading: boolean
  error: string | null
}

export function TokenStats() {
  const [tokenData, setTokenData] = useState<TokenData>({
    price: 0,
    marketCap: 0,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/simple/networks/bitrock/token_price/0xA056871E6796315c558280bff7E7f5d2c5B1f6fB?include_market_cap=true&mcap_fdv_fallback=true",
        )

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`)
        }

        const data = await response.json()

        // Extract data from the response using the contract address as key
        const contractAddress = "0xa056871e6796315c558280bff7e7f5d2c5b1f6fb"
        const price = Number.parseFloat(data.data.attributes.token_prices[contractAddress])
        const marketCap = Number.parseFloat(data.data.attributes.market_cap_usd[contractAddress])

        setTokenData({
          price,
          marketCap,
          isLoading: false,
          error: null,
        })
      } catch (error) {
        console.error("Error fetching token data:", error)
        setTokenData({
          price: 0,
          marketCap: 0,
          isLoading: false,
          error: "Failed to fetch token data",
        })
      }
    }

    fetchTokenData()
  }, [])

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", { maximumFractionDigits: 2 })
  }

  // Format price with appropriate decimal places
  const formatPrice = (price: number) => {
    if (price >= 1000) return price.toLocaleString("en-US", { maximumFractionDigits: 2 })
    if (price >= 100) return price.toLocaleString("en-US", { maximumFractionDigits: 2 })
    if (price >= 10) return price.toLocaleString("en-US", { maximumFractionDigits: 3 })
    if (price >= 1) return price.toLocaleString("en-US", { maximumFractionDigits: 4 })
    return price.toLocaleString("en-US", { maximumFractionDigits: 6 })
  }

  return (
    <motion.div
      className="w-full bg-black/60 backdrop-blur-sm border-b border-green-500/30 py-2 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          {tokenData.isLoading ? (
            <div className="flex items-center justify-center w-full py-1">
              <Loader2 className="h-4 w-4 text-green-500 animate-spin mr-2" />
              <span className="text-sm text-gray-400">Loading token data...</span>
            </div>
          ) : tokenData.error ? (
            <div className="text-sm text-red-400 w-full text-center">{tokenData.error}</div>
          ) : (
            <>
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-300 mr-1">Price:</span>
                  <span className="text-sm font-medium text-white">${formatPrice(tokenData.price)}</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400">Live</span>
                </div>

                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-300 mr-1">Market Cap:</span>
                  <span className="text-sm font-medium text-white">${formatNumber(tokenData.marketCap)}</span>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">Bitrock</span>
                <span className="ml-2 text-xs text-gray-400">
                  Data from <span className="text-green-400">Gecko Terminal</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
