import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: "Zargiya's Agentic AI Developer Roadmap",
  description: 'Zargiya transforms from Software Engineer to Job-Ready Agentic AI Developer in 2-3 months',
  keywords: 'AI, Machine Learning, Agentic AI, LangChain, Python, Developer Roadmap, LLM, Zargiya',
  authors: [{ name: 'Zargiya Agentic AI Roadmap' }],
  openGraph: {
    title: "Zargiya's Agentic AI Developer Roadmap",
    description: "Zargiya's personalized 12-week roadmap to become an agentic AI developer",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zargiya's Agentic AI Developer Roadmap",
    description: "Zargiya's personalized 12-week roadmap to become an agentic AI developer",
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 