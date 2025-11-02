import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations();
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'من نحن - سماقيه للأخشاب'
      : 'About Us - Sammakieh Timbers',
    description: isArabic
      ? 'تعرف على شركة سماقيه للأخشاب، مهمتنا ورؤيتنا والتزامنا بالتميز في صناعة الأخشاب. شراكة موثوقة وجودة مضمونة.'
      : 'Learn about Sammakieh Timbers, our mission, vision, and commitment to excellence in the timber industry. Trusted partnership and guaranteed quality.',
    keywords: isArabic
      ? 'من نحن، شركة الأخشاب، سماقيه، تاريخ الشركة، مهمة الشركة'
      : 'about us, timber company, history, mission, vision, company values',
    alternates: {
      canonical: `https://mhstimber.com/${locale}/about`,
      languages: {
        en: 'https://mhstimber.com/en/about',
        ar: 'https://mhstimber.com/ar/about',
        'x-default': 'https://mhstimber.com/en/about',
      },
    },
    openGraph: {
      title: isArabic ? 'من نحن - سماقيه للأخشاب' : 'About Us - Sammakieh Timbers',
      description: isArabic
        ? 'تعرف على شركة سماقيه للأخشاب ومهمتنا ورؤيتنا'
        : 'Learn about Sammakieh Timbers, our mission and vision',
      url: `https://mhstimber.com/${locale}/about`,
      siteName: 'Sammakieh Timbers',
      images: [
        {
          url: '/images/about-company.jpg',
          width: 1200,
          height: 630,
          alt: isArabic ? 'من نحن - سماقيه للأخشاب' : 'About Us - Sammakieh Timbers',
        },
      ],
      locale: isArabic ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };
}

export default async function AboutPage() {
  const t = await getTranslations();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 -mt-20 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 leading-tight">
              {t('A88')}
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                {t('A14')}
              </p>
              
              <p className="text-lg">
                {t('A15')}
              </p>
              
              <p className="text-lg">
                {t('A16')}
              </p>
              
              <p className="text-lg">
                {t('A91')}
              </p>
            </div>
          </div>

          {/* Right Content - Two Images Stacked */}
          <div className="space-y-0">
            {/* First Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-t-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about-company.jpg"
                  alt={t('A89')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Second Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-b-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about-team.jpg"
                  alt={t('A90')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
