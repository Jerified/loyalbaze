import Header from '@/components/Header'
import Navbar from '@/components/Navbar';
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
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          <Navbar />

          {/* SearchBox */}

          {/* <SearchBox /> */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
