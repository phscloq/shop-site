import './globals.css'
import type { Metadata } from 'next'
import { ShoppingCartProvider } from './lib/context';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import Footer from './components/footer';


export const metadata: Metadata = {
  title: 'Shop Allure: Your One-Stop Online Shopping Destination',
  description: 'Explore a wide range of high-quality products at Shop Allure. From fashionable clothing and accessories to the latest gadgets and home essentials, find everything you need in one place. Enjoy a seamless shopping experience with fast delivery and excellent customer service.',
}
interface LayoutProps {

  children: React.ReactNode;
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: 
  LayoutProps
) {

  return (
   
    <html lang="en">
        <ShoppingCartProvider>
      
            <body className={`${inter.className}  min-h-screen `}>
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
          </body>
        </ShoppingCartProvider>
    </html>

  )

  }
