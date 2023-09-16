import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tra cứu phạt nguội',
  description: 'Phần mềm kiểm tra phạt nguội cho xe ô tô, xe máy, xe máy điện tại Việt Nam và các tỉnh thành lớn như TP Hồ Chí Minh, Hà Nội, Đà Nẵng, ...',
  keywords: ["Phạt nguội", 'csgt', 'cảnh sát giao thông', 'xử phạt', 'nextjs'],
  openGraph: {
    title: 'Tra cứu phạt nguội',
    description: 'Phần mềm kiểm tra phạt nguội cho xe ô tô, xe máy, xe máy điện tại Việt Nam và các tỉnh thành lớn như TP Hồ Chí Minh, Hà Nội, Đà Nẵng, ...',
    images: 'https://i.ibb.co/KxwRjth/error.png',
    rich_attachment: true,
    image: {
      width: 1080,
      height: 1080,
    },
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
