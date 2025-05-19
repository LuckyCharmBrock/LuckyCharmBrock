"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/50 to-black z-0"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-1/4 text-9xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          🍀
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/4 text-9xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            delay: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          🍀
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="inline-block bg-green-500/20 px-4 py-1 rounded-full border border-green-500/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-green-400 text-sm font-medium">Live on Bitrock Blockchain</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-green-500">Lucky Charm</span> <span className="text-yellow-500">($CHARM)</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The Lottery Token of Bitrock! Combining scarcity, community governance, and a bi-weekly lottery system.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 group">
              Buy $CHARM
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8 py-6"
            >
              Join Community
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-black/40 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="text-yellow-500 text-3xl font-bold">100</div>
              <div className="text-gray-400 text-sm">Total Supply</div>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="text-yellow-500 text-3xl font-bold">8%</div>
              <div className="text-gray-400 text-sm">Transaction Tax</div>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="text-yellow-500 text-3xl font-bold">Bi-Weekly</div>
              <div className="text-gray-400 text-sm">Lottery Draws</div>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="text-yellow-500 text-3xl font-bold">1 $CHARM</div>
              <div className="text-gray-400 text-sm">Min. to Enter</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
