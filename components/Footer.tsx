'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();

  return (
    <footer className="bg-gray-100 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {t('A9')}
            </h3>
            <p className="text-gray-600">
              {t('A10')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {t('A11')}
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600" dir="ltr">
                {t('A12')}
              </p>
              <p className="text-gray-600" dir="ltr">
                {t('A13')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-gray-300 mt-8 pt-6">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 relative">
              <Image
                src="/logos/main-logo.png"
                alt={t('A119')}
                fill
                className="object-contain"
              />
            </div>
          </Link>
            <p className="text-gray-500 text-sm" dir="ltr">
              © 2025 {t('A1')}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
