import Header from '@/components/Header'
import localFont from '@next/font/local'
import './globals.css'
import Providers from '../../';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400,'
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700,'
    },
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
