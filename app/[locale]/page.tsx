'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { useParams } from 'next/navigation';
import Script from 'next/script';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  // Hero slider images
  const heroImages = [
    '/images/hero/hero-timber-bg.jpg',
    '/images/hero/wood-beams.jpg',
    '/images/hero/wood-planks.jpg',
    '/images/hero/construction-site.jpg',
    '/images/hero/timber-bg.jpg'
  ];

  const galleryImages = [
    {
      src: '/images/timber-bg.jpg',
      alt: t('A69'),
      title: t('A69')
    },
    {
      src: '/images/wood-beams.jpg',
      alt: t('A70'),
      title: t('A70')
    },
    {
      src: '/images/wood-planks.jpg',
      alt: t('A71'),
      title: t('A71')
    },
    {
      src: '/images/Plywood.jpg',
      alt: t('A72'),
      title: t('A72')
    }
  ];

  const stats = [
    { number: t('A122'), label: t('A123') },
    { number: t('A124'), label: t('A125') },
    { number: t('A126'), label: t('A127') },
    { number: t('A128'), label: t('A129') }
  ];

  const isArabic = locale === 'ar';

  // Structured Data JSON-LD for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: isArabic ? 'سماقيه للأخشاب' : 'Sammakieh Timbers',
    alternateName: 'MHS Timber',
    url: `https://mhstimber.com/${locale}`,
    logo: 'https://mhstimber.com/logos/main-logo.png',
    description: isArabic
      ? 'مورد الأخشاب الرائد في المملكة العربية السعودية'
      : 'Leading timber supplier in Saudi Arabia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '31 Al Islam Street, Al Hamra',
      addressLocality: 'Jeddah',
      addressCountry: 'SA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-55-776-0117',
      contactType: 'Customer Service',
      email: 'info@mhstimber.com',
      areaServed: 'SA',
      availableLanguage: ['ar', 'en'],
    },
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: isArabic ? 'سماقيه للأخشاب' : 'Sammakieh Timbers',
    url: `https://mhstimber.com/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `https://mhstimber.com/${locale}/products?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="relative">
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <ImageSlider 
            images={heroImages}
            interval={4000}
            className="w-full h-full"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            <div className="block">{t('A73')}</div>
            <div className="block">{t('A74')}</div>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('A75')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/services`}
              className="bg-timber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-timber-700 transition-colors text-lg"
            >
              {t('A2')}
            </Link>
            <Link 
              href={`/${locale}/products`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              {t('A4')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-timber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-timber-200">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              {t('A76')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('A77')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Link key={index} href={`/${locale}/products`} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{t('A78')}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              {t('A79')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('A80')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-timber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-timber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('A58')}
              </h3>
              <p className="text-gray-600">
                {t('A81')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-timber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-timber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('A59')}
              </h3>
              <p className="text-gray-600">
                {t('A82')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-timber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-timber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('A57')}
              </h3>
              <p className="text-gray-600">
                {t('A83')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-timber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('A42')}
          </h2>
          <p className="text-xl mb-8 text-timber-100 max-w-3xl mx-auto">
            {t('A84')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/contact`}
              className="bg-white text-timber-800 px-8 py-4 rounded-lg font-semibold hover:bg-timber-100 transition-colors text-lg"
            >
              {t('A44')}
            </Link>
            <Link 
              href={`/${locale}/services`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-timber-800 transition-colors text-lg"
            >
              {t('A45')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
