'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const pathname = usePathname();
  const locale = pathname.startsWith('/ar') ? 'ar' : 'en';

  let t: any;
  try {
    t = useTranslations();
  } catch (error: any) {
    setHasError(true);
    setErrorMessage(error?.message || 'Translation error');
  }

  // Safe translation function with fallback
  const tr = (key: string, fallback: string = '') => {
    try {
      return t ? t(key) : fallback;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return fallback;
    }
  };

  useEffect(() => {
    // Catch any runtime errors
    const errorHandler = (event: ErrorEvent) => {
      console.error('Runtime error:', event.error);
      setHasError(true);
      setErrorMessage(event.error?.message || event.message);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">خطأ / Error</h1>
          <p className="text-gray-700 mb-6 font-mono text-sm">{errorMessage}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-timber-600 text-white rounded-lg hover:bg-timber-700 transition-colors"
          >
            إعادة تحميل الصفحة / Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-100 px-6 py-8 -mt-20 pt-28">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            {tr('A24', 'Our Products')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {tr('A25', 'Discover our comprehensive range of high-quality timber products')}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 - Wood Planks */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="/images/wood-beams.jpg"
                alt={tr('A26', 'Wood Planks')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tr('A26', 'Wood Planks (Swedish/Finnish)')}
              </h3>
              
              <div className="space-y-3 mb-4">
                <p className="text-gray-700 font-medium">
                  {tr('A27', 'High-quality natural wood planks')}
                </p>
                <p className="text-gray-600 text-sm">
                  {tr('A27_desc', 'Distinguished by hardness and dimensional accuracy')}
                </p>
                <p className="text-gray-600 text-sm">
                  {tr('A27_available', 'Available in red and white wood from Sweden and Finland')}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  {tr('A27_applications', 'Applications:')}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{tr('A27_app1', '• Carpentry and construction work')}</li>
                  <li>{tr('A27_app2', '• Ceilings and interior walls')}</li>
                  <li>{tr('A27_app3', '• Light furniture and packaging')}</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-timber-600">
                  {tr('A27_type', 'Type: White/Red wood')}
                </p>
              </div>

              <Link 
                href={`/${locale}/contact`} 
                className="block w-full bg-timber-600 text-white py-2 px-4 rounded-lg hover:bg-timber-700 transition-colors text-center"
              >
                {tr('A55', 'Get Quote')}
              </Link>
            </div>
          </div>

          {/* Product 2 - Wooden Sleepers */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="/images/wood-planks.jpg"
                alt={tr('A28', 'Wooden Beams')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tr('A28', 'Wooden Beams (Swedish/Finnish)')}
              </h3>
              
              <div className="space-y-3 mb-4">
                <p className="text-gray-700 font-medium">
                  {tr('A29_desc', 'Strong and cohesive sleepers made of Scandinavian wood')}
                </p>
                <p className="text-gray-600 text-sm">
                  {tr('A29_features', 'Distinguished by dryness and high straightness')}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  {tr('A29_applications', 'Applications:')}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{tr('A29_app1', '• Foundations and wooden structures')}</li>
                  <li>{tr('A29_app2', '• Roofing and formwork')}</li>
                  <li>{tr('A29_app3', '• Construction projects')}</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-timber-600">
                  {tr('A29_type', 'Type: White/Red wood')}
                </p>
              </div>

              <Link 
                href={`/${locale}/contact`} 
                className="block w-full bg-timber-600 text-white py-2 px-4 rounded-lg hover:bg-timber-700 transition-colors text-center"
              >
                {tr('A55', 'Get Quote')}
              </Link>
            </div>
          </div>

          {/* Product 3 - Plywood Boards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="/images/Plywood.jpg"
                alt={tr('A30', 'Plywood Boards')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tr('A30', 'Plywood Boards')}
              </h3>
              
              <div className="space-y-3 mb-4">
                <p className="text-gray-700 font-medium">
                  {tr('A31_desc', 'Multi-layer boards made of high-quality wood')}
                </p>
                <p className="text-gray-600 text-sm">
                  {tr('A31_available', 'Available in several types for indoor and outdoor use')}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  {tr('A31_applications', 'Applications:')}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{tr('A31_app1', '• Concrete formwork')}</li>
                  <li>{tr('A31_app2', '• Furniture and kitchens')}</li>
                  <li>{tr('A31_app3', '• Interior design and industrial packaging')}</li>
                </ul>
              </div>

              <div className="mb-4 space-y-2">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    {tr('A31_dimensions', 'Dimensions:')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {tr('A31_dims', '1220 × 2440 mm – Thickness from 9 to 18 mm')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-timber-600">
                    {tr('A31_origin', 'Origin: Malaysia / Russia / China / Indonesia')}
                  </p>
                </div>
              </div>

              <Link 
                href={`/${locale}/contact`} 
                className="block w-full bg-timber-600 text-white py-2 px-4 rounded-lg hover:bg-timber-700 transition-colors text-center"
              >
                {tr('A55', 'Get Quote')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              {tr('A23', 'Premium Wood Products')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {tr('A95', 'Explore our comprehensive range of timber products designed for various construction needs')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-timber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-timber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tr('A26', 'Wood Beams')}
              </h3>
              <p className="text-gray-600">
                {tr('A96', 'Structural beams for construction projects of all sizes')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-timber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-timber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tr('A28', 'Wood Planks')}
              </h3>
              <p className="text-gray-600">
                {tr('A97', 'High-quality planks for various construction applications')}
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-timber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-timber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tr('A30', 'Custom Solutions')}
              </h3>
              <p className="text-gray-600">
                {tr('A98', 'Tailored solutions to meet your specific project requirements')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-timber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            {tr('A53', 'Get Free Quote')}
          </h2>
          <p className="text-xl mb-8 text-timber-100">
            {tr('A54', 'Contact us today for a free quote on your timber needs')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/contact`} 
              className="bg-white text-timber-800 px-8 py-3 rounded-lg font-semibold hover:bg-timber-100 transition-colors text-center"
            >
              {tr('A55', 'Get Quote')}
            </Link>
            <Link 
              href={`/${locale}/products`} 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-timber-800 transition-colors text-center"
            >
              {tr('A56', 'Browse Products')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
