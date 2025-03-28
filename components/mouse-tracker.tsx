"use client"

import { useEffect, useRef, useState } from "react"

export function MouseTracker() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 500)

    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`
        dotRef.current.style.top = `${clientY}px`
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${clientX}px`
        glowRef.current.style.top = `${clientY}px`
      }
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
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-50 h-6 w-6 -ml-3 -mt-3 rounded-full border border-primary transition-opacity duration-500"
        style={{
          opacity: isHovering ? opacity : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      <div
        ref={glowRef}
        className="fixed pointer-events-none z-40 h-40 w-40 -ml-20 -mt-20 rounded-full bg-primary/10 blur-xl transition-opacity duration-500"
        style={{
          opacity: isHovering ? opacity * 0.6 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </>
  )
}
