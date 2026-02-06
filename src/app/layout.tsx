import './styles/globals.css'
import Image from 'next/image'
import Script from 'next/script'
import { cookies as nextCookies } from 'next/headers'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // prefer cookie on server to avoid hydration mismatches for returning users
  const cookieStore = await nextCookies()
  const cookieTheme = cookieStore?.get ? cookieStore.get('theme')?.value : undefined
  const initialTheme = cookieTheme === 'dark' ? 'dark' : cookieTheme === 'light' ? 'light' : undefined

  return (
    <html lang="en" className={`${inter.variable}${initialTheme === 'dark' ? ' dark' : ''}`} data-theme={initialTheme}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inline script to set initial theme quickly and avoid flash */}
        <Script id="theme-init" strategy="beforeInteractive">{`(function(){try{var t=localStorage.getItem('theme');if(!t){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark'}document.documentElement.setAttribute('data-theme',t);if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}try{document.cookie='theme='+t+';path=/;max-age='+60*60*24*365+';SameSite=Lax'}catch(e){} }catch(e){} })()`}</Script>
      </head>
      <body>
        <Header />
        <main className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
