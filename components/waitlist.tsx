'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Waitlist() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock submission logic
        console.log('Submitted email:', email)
        setSubmitted(true)
        setEmail('')
    }

    if (submitted) {
        return (
            <div className="text-green-400 font-medium text-lg animate-in fade-in duration-500">
                Thanks! You're on the list.
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm mt-8">
            <Input
                type="email"
                placeholder="Work email preferred"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-600"
            />
            <Button type="submit" className="bg-white text-black hover:bg-zinc-200 font-semibold">
                Get Early Access
            </Button>
        </form>
    )
}
