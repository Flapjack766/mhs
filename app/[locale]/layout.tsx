import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locales = ['en', 'ar'];

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    metadataBase: new URL('https://mhstimber.com'),
    title: isArabic ? 'سماقيه للأخشاب | مورد الأخشاب الرائد' : 'Sammakieh Timbers | Premium Timber',
    description: isArabic 
      ? 'مورد الأخشاب الرائد في المملكة العربية السعودية. نقدم أجود أنواع الأخشاب لمشاريع البناء والتشييد.'
      : 'Leading timber supplier in Saudi Arabia providing high-quality construction wood and timber solutions.',
    keywords: 'timber, wood, construction, Saudi Arabia, building materials, أخشاب, بناء, السعودية, سماقيه',
    applicationName: 'Sammakieh Timbers',
    authors: [{ name: 'Sammakieh Timbers' }],
    generator: 'Next.js',
    openGraph: {
      title: isArabic ? 'سماقيه للأخشاب' : 'Sammakieh Timbers - Premium Timber Solutions',
      description: isArabic 
        ? 'مورد الأخشاب الرائد في السعودية مع أعلى جودة وخدمة موثوقة'
        : 'Leading timber supplier in Saudi Arabia with premium quality and reliable service',
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
      locale: isArabic ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic ? 'سماقيه للأخشاب' : 'Sammakieh Timbers',
      description: isArabic 
        ? 'مورد الأخشاب الرائد في السعودية'
        : 'Leading timber supplier in Saudi Arabia',
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
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: isArabic ? 'سماقيه للأخشاب' : 'Sammakieh Timbers',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header locale={locale} />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
