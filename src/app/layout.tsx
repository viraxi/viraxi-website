import './styles/globals.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata = {
  title: 'Viraxi',
  description: 'Viraxi — minimal, modern landing page for the Viraxi organization',
  metadataBase: new URL('https://viraxi.tech'),
  openGraph: {
    title: 'Viraxi',
    description: 'Minimal, modern landing page for the Viraxi organization',
    url: 'https://viraxi.tech',
    siteName: 'Viraxi',
    images: ['/logo-128.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viraxi',
    description: 'Minimal, modern landing page for the Viraxi organization',
    images: ['/logo-128.png']
  },
  icons: {
    icon: '/viraxi.ico',
    shortcut: '/viraxi.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <header className="w-full py-6 px-6 border-b border-gray-800 bg-transparent">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Image src="/logo-48.png" alt="Viraxi" width={48} height={48} />
            <h1 className="text-lg font-semibold text-slate-100">Viraxi</h1>
          </div>
        </header>
        <main className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
        <footer className="w-full py-6 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-sm text-gray-400">© {new Date().getFullYear()} Viraxi</div>
        </footer>
      </body>
    </html>
  )
}
