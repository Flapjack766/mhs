'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MenuIcon } from './DefaultIcons';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'A2', href: `/${locale}/services` },
    { key: 'A3', href: `/${locale}/about` },
    { key: 'A4', href: `/${locale}/products` },
    { key: 'A5', href: `/${locale}/people` },
    { key: 'A6', href: `/${locale}/contact` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={`/${locale}`} className="hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 relative">
              <Image
                src="/logos/main-logo.png"
                alt={t('A119')}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                'text-gray-700 hover:text-timber-800 transition-colors duration-200 font-medium',
                pathname === item.href && 'underline'
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & Mobile menu */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Link
              href={pathname.replace(`/${locale}`, '/en')}
              className={cn(
                'px-3 py-1 rounded text-sm font-medium transition-colors',
                locale === 'en' 
                  ? 'bg-timber-600 text-white' 
                  : 'text-gray-600 hover:text-timber-800 hover:bg-gray-200'
              )}
            >
              {t('A120')}
            </Link>
            <Link
              href={pathname.replace(`/${locale}`, '/ar')}
              className={cn(
                'px-3 py-1 rounded text-sm font-medium transition-colors',
                locale === 'ar' 
                  ? 'bg-timber-600 text-white' 
                  : 'text-gray-600 hover:text-timber-800 hover:bg-gray-200'
              )}
            >
              {t('A121')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  'block py-2 text-gray-700 hover:text-timber-800 transition-colors duration-200 font-medium',
                  pathname === item.href && 'text-timber-800 font-semibold'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Link
                  href={pathname.replace(`/${locale}`, '/en')}
                  className={cn(
                    'px-3 py-1 rounded text-sm font-medium transition-colors',
                    locale === 'en' 
                      ? 'bg-timber-600 text-white' 
                      : 'text-gray-600 hover:text-timber-800 hover:bg-gray-200'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('A120')}
                </Link>
                <Link
                  href={pathname.replace(`/${locale}`, '/ar')}
                  className={cn(
                    'px-3 py-1 rounded text-sm font-medium transition-colors',
                    locale === 'ar' 
                      ? 'bg-timber-600 text-white' 
                      : 'text-gray-600 hover:text-timber-800 hover:bg-gray-200'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('A121')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
