"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CloverProps {
  x: number
  y: number
  size: number
  rotation: number
  delay: number
  duration: number
}

const Clover = ({ x, y, size, rotation, delay, duration }: CloverProps) => {
  return (
    <motion.div
      className="absolute text-green-500/10 z-0"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: `${size}px`,
      }}
      initial={{ opacity: 0, rotate: rotation }}
      animate={{
        opacity: [0, 0.5, 0],
        y: [0, -50, -100],
        rotate: rotation + 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 5,
      }}
    >
      🍀
    </motion.div>
  )
}

interface FloatingCloversProps {
  count?: number
}

export function FloatingClovers({ count = 10 }: FloatingCloversProps) {
  const [clovers, setClovers] = useState<CloverProps[]>([])

  useEffect(() => {
    const newClovers = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }))
    setClovers(newClovers)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clovers.map((props, index) => (
        <Clover key={index} {...props} />
      ))}
    </div>
  )
}
