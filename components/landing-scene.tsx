'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatedLetterText } from "@/components/ui/animated-letter-text"
import { Waitlist } from "@/components/waitlist"

export function LandingScene() {
    return (
        <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Background 3D Scene - Full Screen with shift to Right */}
            {/* Use translate-x to shift the scene visually to the right so the robot appears on the right side */}
            <div className="absolute inset-0 z-0 translate-x-[20%] md:translate-x-[25%] lg:translate-x-[30%]">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>

            <div className="relative z-10 flex h-full flex-col md:flex-row pointer-events-none">
                {/* Left content - Text Overlay */}
                <div className="flex-1 p-8 relative flex flex-col justify-center items-center md:items-start pl-8 md:pl-20 pointer-events-auto">
                    {/* Updated text color to white/neutral-50 via utility class or updated component props if needed */}
                    <div className="text-zinc-100 mb-8">
                        <AnimatedLetterText text="Synoid" letterToReplace="o" className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-2" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 max-w-2xl text-center md:text-left">
                        AI Workbenches for <br className="hidden md:block" /> Serious Thinking
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-xl text-center md:text-left mb-2 leading-relaxed">
                        Domain-aware AI workbenches with structured reasoning, context isolation, analytics, and scheduled intelligence.
                    </p>

                    <p className="text-zinc-500 text-sm max-w-md text-center md:text-left mb-8">
                        Designed for finance, education, developers, and cybersecurity professionals.
                    </p>

                    <Waitlist />

                    {/* Micro-section */}
                    <div className="mt-8 flex flex-col gap-2 text-zinc-500 text-sm text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            Workbenches, not chats
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            Profiles that shape intelligence
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            Measured, structured outputs
                        </div>
                    </div>
                </div>

                {/* Right content spacer */}
                <div className="flex-1" />
            </div>
        </Card>
    )
}
