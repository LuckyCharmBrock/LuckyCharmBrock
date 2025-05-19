"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SocialCardProps {
  icon: ReactNode | string
  title: string
  subtitle: string
  url: string
  color?: "green" | "blue" | "red" | "yellow"
}

export function SocialCard({ icon, title, subtitle, url, color = "green" }: SocialCardProps) {
  const colorClasses = {
    green: "hover:bg-green-900/40 hover:border-green-500/50",
    blue: "hover:bg-blue-900/40 hover:border-blue-500/50",
    red: "hover:bg-red-900/40 hover:border-red-500/50",
    yellow: "hover:bg-yellow-900/40 hover:border-yellow-500/50",
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-black/60 p-6 rounded-lg border border-green-500/30 text-center ${colorClasses[color]} transition-colors block`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-center mb-3">
        {typeof icon === "string" ? <div className="text-4xl">{icon}</div> : icon}
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">{title}</h3>
      <p className="text-green-400 text-sm mt-1">{subtitle}</p>
    </motion.a>
  )
}
