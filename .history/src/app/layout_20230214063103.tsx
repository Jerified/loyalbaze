import Header from '@/components/Header'
import localFont from '@next/font/local'
import './globals.css'
import Providers from './Providers';

const cooper = localFont({
  src: [
    {
      path: '../pubulic'
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
