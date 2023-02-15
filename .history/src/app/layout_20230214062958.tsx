import Header from '@/components/Header'
import localFont from '@next'
import './globals.css'
import Providers from './Providers';

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