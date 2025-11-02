import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PeoplePage() {
  const t = useTranslations();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-100 px-6 py-8 -mt-20 pt-28">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-8">
            {t('A5')}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              {t('A99')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('A100')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Management Team */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 relative mx-auto mb-6">
              <Image
                src="/images/Mounzer.jpg"
                alt={t('A101')}
                fill
                className="object-cover object-top rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('A60')}
            </h3>
            <p className="text-gray-600 mb-2">
              {t('A61')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('A62')}
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <a href="https://wa.me/966565562780" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-green-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span dir="ltr">+966 56 556 2780</span>
              </a>
              <a href="mailto:Mounzer@mhstimber.com" className="flex items-center justify-center space-x-2 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span dir="ltr">Mounzer@mhstimber.com</span>
              </a>
            </div>
          </div>

          {/* Sales Team */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 relative mx-auto mb-6">
              <Image
                src="/images/sales-team.jpg"
                alt={t('A102')}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('A63')}
            </h3>
            <p className="text-gray-600 mb-2">
              {t('A64')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('A65')}
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <a href="https://wa.me/966557760117" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-green-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span dir="ltr">+966 55 776 0117</span>
              </a>
              <a href="mailto:Abdulrahman@mhstimber.com" className="flex items-center justify-center space-x-2 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span dir="ltr">Abdulrahman@mhstimber.com</span>
              </a>
            </div>
          </div>

          {/* Technical Partner */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 relative mx-auto mb-6">
              <Image
                src="/images/vetap-partner.jpg"
                alt={t('A103')}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('A66')}
            </h3>
            <p className="text-gray-600 mb-2">
              {t('A67')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('A68')}
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <a href="https://wa.me/966553198577" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-green-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span dir="ltr">+966 55 319 8577</span>
              </a>
              <a href="mailto:info@vetaps.com" className="flex items-center justify-center space-x-2 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span dir="ltr">info@vetaps.com</span>
              </a>
              <a href="https://vetaps.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-timber-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span dir="ltr">vetaps.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
