import { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
    const blobRef = useRef<HTMLDivElement>(null)
    const positionRef = useRef({ x: 0, y: 0 })
    const targetRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = {
                x: e.clientX,
                y: e.clientY
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        let animationFrameId: number

        const animate = () => {
            const { x: currentX, y: currentY } = positionRef.current
            const { x: targetX, y: targetY } = targetRef.current

            // Smooth interpolation (lerp)
            // Adjust the 0.1 factor to change the "lag" or smoothness
            const newX = currentX + (targetX - currentX) * 0.1
            const newY = currentY + (targetY - currentY) * 0.1

            positionRef.current = { x: newX, y: newY }

            if (blobRef.current) {
                blobRef.current.style.transform = `translate(${newX}px, ${newY}px)`
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* The glowing blob */}
            <div
                ref={blobRef}
                className="absolute w-[800px] h-[800px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-50 dark:opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(114,252,203,0.8) 0%, rgba(114,252,203,0) 70%)',
                    top: '-400px', // Center the blob on the cursor
                    left: '-400px',
                    willChange: 'transform',
                }}
            />
            {/* Optional: A secondary static gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/50 pointer-events-none" />
        </div>
    )
}
