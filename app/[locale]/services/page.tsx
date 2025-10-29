"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt={t('A85')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            {t('A17')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('A86')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 leading-tight">
              {t('A87')}
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {t('A18')}
            </p>
            
            <p className="text-lg">
              {t('A19')}
            </p>
            
            <p className="text-lg">
              {t('A20')}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
