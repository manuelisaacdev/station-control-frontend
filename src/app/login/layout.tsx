import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Login - Station Control",
}

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <>{children}</>
    )
}
