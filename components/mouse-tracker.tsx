"use client"

import { useEffect, useState } from "react"

export function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // Fade in the cursor effect after component mounts
    const timer = setTimeout(() => setOpacity(1), 500)

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 h-6 w-6 -ml-3 -mt-3 rounded-full border border-primary transition-opacity duration-500"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isHovering ? opacity : 0,
          transition: "opacity 0.5s ease, left 0.05s linear, top 0.05s linear",
        }}
      />

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-40 h-40 w-40 -ml-20 -mt-20 rounded-full bg-primary/10 blur-xl transition-opacity duration-500"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isHovering ? opacity * 0.6 : 0,
          transition: "opacity 0.5s ease, left 0.2s ease-out, top 0.2s ease-out",
        }}
      />
    </>
  )
}

