import Header from '@/components/Header'
import localFont from '@next/font/local'
import './globals.css'
import Providers from './Providers';

const cooper = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular-woff2',
      weight: 
    }
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
