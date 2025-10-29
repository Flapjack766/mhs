'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NotFound() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center -mt-20 pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-timber-600 mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-timber-600 mx-auto mb-8"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            {locale === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {locale === 'ar' 
              ? 'عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون الصفحة قد تم نقلها أو حذفها.'
              : 'Sorry, the page you are looking for does not exist. The page may have been moved or deleted.'
            }
          </p>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={`/${locale}`}
            className="bg-timber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-timber-700 transition-colors text-lg"
          >
            {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="border-2 border-timber-600 text-timber-600 px-8 py-3 rounded-lg font-semibold hover:bg-timber-600 hover:text-white transition-colors text-lg"
          >
            {locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-300 pt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {locale === 'ar' ? 'روابط مفيدة' : 'Helpful Links'}
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href={`/${locale}/services`}
              className="text-timber-600 hover:text-timber-800 transition-colors"
            >
              {locale === 'ar' ? 'الخدمات' : 'Services'}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="text-timber-600 hover:text-timber-800 transition-colors"
            >
              {locale === 'ar' ? 'المنتجات' : 'Products'}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-timber-600 hover:text-timber-800 transition-colors"
            >
              {locale === 'ar' ? 'من نحن' : 'About Us'}
            </Link>
            <Link
              href={`/${locale}/people`}
              className="text-timber-600 hover:text-timber-800 transition-colors"
            >
              {locale === 'ar' ? 'الأشخاص' : 'People'}
            </Link>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
            <span className="text-gray-600 text-sm">
              {locale === 'ar' ? 'اللغة:' : 'Language:'}
            </span>
            <Link
              href={window.location.pathname.replace(`/${locale}`, '/en')}
              className={locale === 'en' ? 'text-timber-600 font-semibold' : 'text-gray-600 hover:text-timber-600 transition-colors'}
            >
              English
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href={window.location.pathname.replace(`/${locale}`, '/ar')}
              className={locale === 'ar' ? 'text-timber-600 font-semibold' : 'text-gray-600 hover:text-timber-600 transition-colors'}
            >
              العربية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
