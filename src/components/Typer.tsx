import React, { useState, useEffect, useRef } from 'react'

const Typer = ({ text, speed = 10 }: { text: string, speed?: number }) => {
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const containerRef = useRef(null)

    // Observer to detect when the component is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true)
                    // Once we start typing, we can stop observing to save resources
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 } // Triggers when 10% of the element is visible
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Typing logic - only runs if isIntersecting is true
    useEffect(() => {
        if (isIntersecting && index < text.length) {
            const randomSpeed = Math.floor(Math.random() * (speed + 10)) + 20

            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index))
                setIndex((prev) => prev + 1)
            }, randomSpeed)

            return () => clearTimeout(timeout)
        }
    }, [index, text, speed, isIntersecting])

    return (
        <div ref={containerRef} className="min-h-[1.5em]">
            <p className="font-mono text-lg text-gray-800 dark:text-gray-200">
                {displayedText}
                {/* Only show cursor if we are currently typing or waiting to start */}
                <span className={`inline-block h-5 text-primary ${isIntersecting && index < text.length ? 'animate-pulse' : 'hidden'}`}>
                    ✦
                </span>
            </p>
        </div>
    )
}

export default Typer