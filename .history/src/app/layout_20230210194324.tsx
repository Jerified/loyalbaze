import Header from '@/components/Header'

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
          <H
          {children}
      </body>
    </html>
  );
}
