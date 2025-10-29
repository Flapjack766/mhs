'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LocationIcon, EmailIcon, PhoneIcon } from '@/components/DefaultIcons';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [ticketNumber, setTicketNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setTicketNumber(result.ticketNumber);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-100 px-6 py-8 -mt-20 pt-28">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-8">
            {t('A6')}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t('A9')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 flex-shrink-0 mt-1 text-timber-600">
                    <LocationIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t('A104')}</p>
                    <p className="text-gray-600" dir="ltr">{t('A10')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 flex-shrink-0 mt-1 text-timber-600">
                    <EmailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t('A105')}</p>
                    <p className="text-gray-600" dir="ltr">{t('A12')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 flex-shrink-0 mt-1 text-timber-600">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t('A106')}</p>
                    <p className="text-gray-600" dir="ltr">{t('A13')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t('A107')}
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>{t('A108')}</p>
                <p>{t('A109')}</p>
                <p>{t('A110')}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('A50')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>تم إرسال رسالتك بنجاح!</strong>
                      <br />
                      <span className="text-sm">رقم التذكرة: <strong>{ticketNumber}</strong></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('A111')}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    dir="auto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-timber-500 focus:border-transparent text-gray-900"
                    placeholder={t('A114')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('A112')}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    dir="auto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-timber-500 focus:border-transparent text-gray-900"
                    placeholder={t('A115')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('A105')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  dir="auto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-timber-500 focus:border-transparent text-gray-900"
                  placeholder={t('A116')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('A106')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  dir="auto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-timber-500 focus:border-transparent text-gray-900"
                  placeholder={t('A117')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('A113')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  dir="auto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-timber-500 focus:border-transparent text-gray-900"
                  placeholder={t('A118')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-timber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-timber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'جاري الإرسال...' : t('A52')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
