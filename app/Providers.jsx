'use client'
import { SessionProvider } from 'next-auth/react'
export default function MyProviders({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}