import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
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
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sorry, the page you are looking for does not exist. The page may have been moved or deleted.
          </p>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/en"
            className="bg-timber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-timber-700 transition-colors text-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/en/contact"
            className="border-2 border-timber-600 text-timber-600 px-8 py-3 rounded-lg font-semibold hover:bg-timber-600 hover:text-white transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-600 text-sm">Language:</span>
            <Link
              href="/en"
              className="text-timber-600 hover:text-timber-800 transition-colors"
            >
              English
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/ar"
              className="text-timber-600 hover:text-timber-800 transition-colors"
            >
              العربية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
