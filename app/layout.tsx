import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: 'Siri Sandhila | AI/ML Engineer & Full Stack Developer',
  description: 'AI & Machine Learning enthusiast pursuing B.E at NNRG, Hyderabad. Building intelligent applications with Python, TensorFlow, and modern web technologies.',
  keywords: ['AI engineer', 'machine learning', 'portfolio', 'Python', 'TensorFlow', 'NLP', 'data visualization', 'full stack developer', 'web development'],
  authors: [{ name: 'Siri Sandhila' }],
  creator: 'Siri Sandhila',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sirisandhila.com',
    title: 'Siri Sandhila | AI/ML Engineer & Full Stack Developer',
    description: 'AI & Machine Learning enthusiast building intelligent applications with Python, TensorFlow, and modern web technologies.',
    siteName: 'Siri Sandhila Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Siri Sandhila Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siri Sandhila | AI/ML Engineer & Full Stack Developer',
    description: 'AI & Machine Learning enthusiast building intelligent applications.',
    creator: '@sirisandhila',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
