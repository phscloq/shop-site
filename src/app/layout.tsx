import Structure from './components/structure'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop Allure: Your One-Stop Online Shopping Destination',
  description: 'Explore a wide range of high-quality products at Shop Allure. From fashionable clothing and accessories to the latest gadgets and home essentials, find everything you need in one place. Enjoy a seamless shopping experience with fast delivery and excellent customer service.',
}
interface LayoutProps {

  children: React.ReactNode;
}
export default function RootLayout({
  children,
}: 
  LayoutProps
) {

  return (
   
    <html lang="en">
      <body className={inter.className}>
      <Structure 
      children={children}
      />
        </body>
    </html>

  )

  }
