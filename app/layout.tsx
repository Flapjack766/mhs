import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mhstimber.com'),
  title: 'سماقيه للأخشاب | Sammakieh Timbers',
  description: 'Leading timber supplier in Saudi Arabia providing high-quality construction wood and timber solutions. مورد الأخشاب الرائد في المملكة العربية السعودية',
  keywords: 'timber, wood, construction, Saudi Arabia, building materials, أخشاب, بناء, السعودية',
  applicationName: 'Sammakieh Timbers',
  authors: [{ name: 'Sammakieh Timbers' }],
  generator: 'Next.js',
  openGraph: {
    title: 'سماقيه للأخشاب - Sammakieh Timbers',
    description: 'Leading timber supplier in Saudi Arabia with premium quality and reliable service',
    url: 'https://mhstimber.com',
    siteName: 'Sammakieh Timbers',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sammakieh Timbers - Premium Timber Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سماقيه للأخشاب - Sammakieh Timbers',
    description: 'Leading timber supplier in Saudi Arabia',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/logos/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
